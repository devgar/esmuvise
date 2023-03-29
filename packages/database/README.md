# MIGRATION

```sql
ALTER TABLE EvaluationItems ADD EvaluationId INTEGER;

UPDATE EvaluationItems SET EvaluationId = 1;

CREATE UNIQUE INDEX `evaluation_items__rubrica_id__alumno_id__asignatura_id__evaluation_id` ON `EvaluationItems` (`RubricaId`, `AlumnoId`, `AsignaturaId`, `EvaluationId`);

DROP INDEX `evaluation_items__rubrica_id__alumno_id__asignatura_id`;
```