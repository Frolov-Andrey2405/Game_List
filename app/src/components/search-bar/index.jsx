export default function SearchBar({
    filterText,
    inWhishListOnly,
    onFilterTextChange,
    oninWhishListOnlyChange,
}) {
    return (
        <form className="filter-form">
            <input
                className="search-input"
                type="text"
                value={filterText}
                placeholder="Search by name"
                onChange={(e) => onFilterTextChange(e.target.value)}
            />
            <label>
                <input
                    className="in-whish-list-checkbox"
                    type="checkbox"
                    checked={inWhishListOnly}
                    onChange={(e) => oninWhishListOnlyChange(e.target.checked)}
                />
                Only on the wish list
            </label>
        </form>
    );
}