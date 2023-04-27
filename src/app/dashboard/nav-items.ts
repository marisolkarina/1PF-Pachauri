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
        path: 'cards',
        title: 'Tarjetas',
        icon: 'badge'
    },

]

export default mylinks;