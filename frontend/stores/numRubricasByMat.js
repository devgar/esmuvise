import { useAsignaturaStore } from "./asignaturas"
import { useRubricaGroupStore } from "./rubricaGroups"
import { useRubricaStore } from "./rubricas"

export const useNumRubricasByMat = defineStore('numRubricasByMat', () => {
    const asignaturas = useAsignaturaStore()
    const rubricaGroups = useRubricaGroupStore()
    const rubricas = useRubricaStore()

    const numRubricasByGroup = computed(() => 
        rubricaGroups.rubricaGroups.map(({ id }) => 
            ({ 
                id, 
                num: rubricas.rubricas.filter(r => r.RubricaGroupId === id ).length,
            })
        )
    )

    const numRubricasByAsignaturas = computed(() => 
        asignaturas.asignaturas.filter(a => a.RubricaGroupId)
            .map(({ id, RubricaGroupId }) => 
                ({
                    id,
                    num: numRubricasByGroup.value.find(rg => rg.id === RubricaGroupId)?.num,
                })    
            )
    )

    function byAsignaturaId (AsignaturaId) {
        return numRubricasByAsignaturas.value.filter(equality({ AsignaturaId }))
    }

    return {
        nums: numRubricasByAsignaturas
    }
})
