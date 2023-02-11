import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerArea = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Area, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly People?: (AreaPerson | null)[] | null;
  readonly subtagID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyArea = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Area, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly People: AsyncCollection<AreaPerson>;
  readonly subtagID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Area = LazyLoading extends LazyLoadingDisabled ? EagerArea : LazyArea

export declare const Area: (new (init: ModelInit<Area>) => Area) & {
  copyOf(source: Area, mutator: (draft: MutableModel<Area>) => MutableModel<Area> | void): Area;
}

type EagerPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Person, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly languages?: string | null;
  readonly description?: string | null;
  readonly areas?: (AreaPerson | null)[] | null;
  readonly numberOfServices?: number | null;
  readonly whatsappNumber?: string | null;
  readonly rating?: number | null;
  readonly education?: string | null;
  readonly verifiedEducation?: boolean | null;
  readonly experience?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Person, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly languages?: string | null;
  readonly description?: string | null;
  readonly areas: AsyncCollection<AreaPerson>;
  readonly numberOfServices?: number | null;
  readonly whatsappNumber?: string | null;
  readonly rating?: number | null;
  readonly education?: string | null;
  readonly verifiedEducation?: boolean | null;
  readonly experience?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Person = LazyLoading extends LazyLoadingDisabled ? EagerPerson : LazyPerson

export declare const Person: (new (init: ModelInit<Person>) => Person) & {
  copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}

type EagerAreaPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AreaPerson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly areaId?: string | null;
  readonly personId?: string | null;
  readonly area: Area;
  readonly person: Person;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAreaPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AreaPerson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly areaId?: string | null;
  readonly personId?: string | null;
  readonly area: AsyncItem<Area>;
  readonly person: AsyncItem<Person>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AreaPerson = LazyLoading extends LazyLoadingDisabled ? EagerAreaPerson : LazyAreaPerson

export declare const AreaPerson: (new (init: ModelInit<AreaPerson>) => AreaPerson) & {
  copyOf(source: AreaPerson, mutator: (draft: MutableModel<AreaPerson>) => MutableModel<AreaPerson> | void): AreaPerson;
}