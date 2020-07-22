
export function byPagination(dataSource = [], perPage = 4, currentPage = 1) {
    const start = (perPage * (currentPage  - 1))
    const end = perPage * currentPage

    return dataSource.slice(start, end)
}