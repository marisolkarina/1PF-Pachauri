interface NavItem{
    path: string,
    title: string,
    icon?: string
}

const mylinks: NavItem[] = [
    {
        path: 'inscripciones',
        title: 'Inscripciones',
        icon: 'arrow_forward'
    },
    {
        path: 'alumnos',
        title: 'Alumnos',
        icon: 'person'
    },
    {
        path: 'cursos',
        title: 'Cursos',
        icon: 'school'
    }

]

export default mylinks;