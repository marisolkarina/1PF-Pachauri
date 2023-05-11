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
        icon: 'school'
    },
    {
        path: 'cursos',
        title: 'Cursos',
        icon: 'auto_stories'
    }

]

export default mylinks;