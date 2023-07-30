import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerBranch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Branch, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly LocationName?: string | null;
  readonly City?: string | null;
  readonly contactNumber?: string | null;
  readonly Cars?: (Car | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBranch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Branch, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly LocationName?: string | null;
  readonly City?: string | null;
  readonly contactNumber?: string | null;
  readonly Cars: AsyncCollection<Car>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Branch = LazyLoading extends LazyLoadingDisabled ? EagerBranch : LazyBranch

export declare const Branch: (new (init: ModelInit<Branch>) => Branch) & {
  copyOf(source: Branch, mutator: (draft: MutableModel<Branch>) => MutableModel<Branch> | void): Branch;
}

type EagerCar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Car, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Type?: string | null;
  readonly Year?: string | null;
  readonly Color?: string | null;
  readonly Location?: string | null;
  readonly branchID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Car, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Type?: string | null;
  readonly Year?: string | null;
  readonly Color?: string | null;
  readonly Location?: string | null;
  readonly branchID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Car = LazyLoading extends LazyLoadingDisabled ? EagerCar : LazyCar

export declare const Car: (new (init: ModelInit<Car>) => Car) & {
  copyOf(source: Car, mutator: (draft: MutableModel<Car>) => MutableModel<Car> | void): Car;
}