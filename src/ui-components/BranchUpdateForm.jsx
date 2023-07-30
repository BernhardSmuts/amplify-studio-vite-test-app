/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Branch } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BranchUpdateForm(props) {
  const {
    id: idProp,
    branch: branchModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    LocationName: "",
    City: "",
    contactNumber: "",
  };
  const [LocationName, setLocationName] = React.useState(
    initialValues.LocationName
  );
  const [City, setCity] = React.useState(initialValues.City);
  const [contactNumber, setContactNumber] = React.useState(
    initialValues.contactNumber
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = branchRecord
      ? { ...initialValues, ...branchRecord }
      : initialValues;
    setLocationName(cleanValues.LocationName);
    setCity(cleanValues.City);
    setContactNumber(cleanValues.contactNumber);
    setErrors({});
  };
  const [branchRecord, setBranchRecord] = React.useState(branchModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Branch, idProp)
        : branchModelProp;
      setBranchRecord(record);
    };
    queryData();
  }, [idProp, branchModelProp]);
  React.useEffect(resetStateValues, [branchRecord]);
  const validations = {
    LocationName: [],
    City: [],
    contactNumber: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          LocationName,
          City,
          contactNumber,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Branch.copyOf(branchRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BranchUpdateForm")}
      {...rest}
    >
      <TextField
        label="Location name"
        isRequired={false}
        isReadOnly={false}
        value={LocationName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationName: value,
              City,
              contactNumber,
            };
            const result = onChange(modelFields);
            value = result?.LocationName ?? value;
          }
          if (errors.LocationName?.hasError) {
            runValidationTasks("LocationName", value);
          }
          setLocationName(value);
        }}
        onBlur={() => runValidationTasks("LocationName", LocationName)}
        errorMessage={errors.LocationName?.errorMessage}
        hasError={errors.LocationName?.hasError}
        {...getOverrideProps(overrides, "LocationName")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={City}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationName,
              City: value,
              contactNumber,
            };
            const result = onChange(modelFields);
            value = result?.City ?? value;
          }
          if (errors.City?.hasError) {
            runValidationTasks("City", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("City", City)}
        errorMessage={errors.City?.errorMessage}
        hasError={errors.City?.hasError}
        {...getOverrideProps(overrides, "City")}
      ></TextField>
      <TextField
        label="Contact number"
        isRequired={false}
        isReadOnly={false}
        value={contactNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationName,
              City,
              contactNumber: value,
            };
            const result = onChange(modelFields);
            value = result?.contactNumber ?? value;
          }
          if (errors.contactNumber?.hasError) {
            runValidationTasks("contactNumber", value);
          }
          setContactNumber(value);
        }}
        onBlur={() => runValidationTasks("contactNumber", contactNumber)}
        errorMessage={errors.contactNumber?.errorMessage}
        hasError={errors.contactNumber?.hasError}
        {...getOverrideProps(overrides, "contactNumber")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || branchModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || branchModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
