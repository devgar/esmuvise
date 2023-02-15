interface db {
    id: number,
    createdAt: Date,
    updatedAt: Date,
}

export interface Alumno  extends db{
    firstName: string,
    lastName: string,
    dni: string,
    codVia: string,
    domicilio: string,
    // ...
}

export interface Asignatura  extends db{
    nameVLC: string,
    nameCAS: string,
    troncal: boolean,
    RubricaGroupId: number,
}

export interface Equivalence extends db {
    max: number,
    icon?: string,
    label?: string,
}

export interface EvaluationItem extends db {
    value: number,
    body: string,
    AlumnoId: number,
    AsignaturaId: number,
    MatriculaId: number,
    RubricaId: number,
}

export interface Matricula extends db {
    ano: number,
    curso: number,
    AlumnoId: number,
    AsignaturaId: number,
}

export interface Rubrica  extends db{
    concept: string,
    vHigh: string,
    vMid: string,
    vLow: string,
    vFail: string,
    RubricaGroupId: number,
}

export interface RubricaGroup  extends db{
    name: string,
}

export type DB<T> = T & {
    id: number, createdAt: Date, updatedAt: Date,
}

export type UnDB<T> = Omit<T, 'id'|'createdAt'|'updatedAt'>



