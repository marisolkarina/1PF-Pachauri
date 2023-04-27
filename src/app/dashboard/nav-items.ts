interface NavItem{
    path: string,
    title: string,
    icon?: string
}

const mylinks: NavItem[] = [
    {
        path: 'alumnos',
        title: 'Alumnos',
        icon: 'person'
    },
    {
        path: 'cursos',
        title: 'Cursos',
        icon: 'school'
    },

]

export default mylinks;