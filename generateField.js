/**
 * Function to generate form fields dynamically
 * @param {Object} config - Configuration object
 * @param {string} config.type - The type of field to generate ("number", "text", "radio", "select", "date")
 * @param {string} config.name - The name and ID of the field
 * @param {string} [config.label] - The label text for the field (optional, defaults to capitalized name)
 * @param {string} [config.value] - Default value for the input field (optional)
 * @param {Array} [config.options] - Options for radio/select fields (optional)
 * @param {Array} [config.additionalParams] - Additional parameters for grouped inputs (e.g., ["year", "month"])
 * @param {string} [config.symbol] - Unit or symbol to append to the input field or label (optional, e.g., "%", "$", "₹")
 * @param {boolean} [config.is_parent_symbol] - If true, connects the symbol directly to the label; otherwise, appends to the field
 * @param {string} [config.min] - Minimum date value (optional)
 * @param {string} [config.max] - Maximum date value (optional)
 * @param {boolean} [config.required] - If true, adds the "required" attribute to the field
 * @returns {string} - HTML string for the generated field
 */
function generateField({
    type,
    name,
    label,
    value = "",
    options = [],
    additionalParams = [],
    symbol = "",
    is_parent_symbol = false,
    min = "",
    max = "",
    required = false
}) {
    const labelText = label || name.replace(/-/g, " ").replace(/\b\w/g, char => char.toUpperCase());
    const labelWithSymbol = is_parent_symbol && symbol ? `${labelText} (${symbol})` : labelText;
    const symbolSpan = !is_parent_symbol && symbol ? `<span class="input-group-text">${symbol}</span>` : "";
    const requiredAttribute = required ? "required" : "";

    // For basic input fields like text or number
    if (type === "number" || type === "text") {
        if (additionalParams.length === 0) {
            return `
                <div class="mb-3">
                    <label for="${name}" class="form-label">${labelWithSymbol}</label>
                    <div class="input-group">
                        <input type="${type}" class="form-control" id="${name}" name="${name}" value="${value}" ${requiredAttribute} />
                        ${symbolSpan}
                    </div>
                </div>
            `;
        } else {
            // With additional params for grouped inputs (e.g., "year", "month")
            const radios = additionalParams.map(param => `
                <div class="btnBorder">
                    <input class="form-check-input" type="radio" name="${name}-type" id="${param}-radio" value="${param}" ${param === additionalParams[0] ? "checked" : ""}>
                    <label class="form-check-label" for="${param}-radio">${param.charAt(0).toUpperCase() + param.slice(1)}</label>
                </div>
            `).join("");

            let colsVal = additionalParams.length === 1 ? [9,3] : [6,6];

            return `
                <div class="mb-3">
                    <label for="${name}" class="form-label">${labelWithSymbol}</label>
                    <div class="row align-items-center">
                        <div class="col-${colsVal[0]} pe-0 mx-auto">
                            <input type="${type}" class="form-control" id="${name}" name="${name}" placeholder="Enter ${labelText.toLowerCase()}" ${requiredAttribute}>
                        </div>
                        <div class="col-${colsVal[1]} d-flex mx-auto p-0">
                            ${radios}
                        </div>
                    </div>
                </div>
            `;
        }
    }

    // For date input
    if (type === "date") {
        return `
            <div class="mb-3">
                <label for="${name}" class="form-label">${labelWithSymbol}</label>
                <input type="date" class="form-control" id="${name}" name="${name}" value="${value}" ${min ? `min="${min}"` : ""} ${max ? `max="${max}"` : ""} ${requiredAttribute} />
            </div>
        `;
    }

    // For radio inputs
    if (type === "radio") {
        const radios = options.map(option => `
            <input type="radio" name="${name}" id="${option}" value="${option}" ${option === options[0] ? "checked" : ""} ${requiredAttribute}>
            <label for="${option}">${option.charAt(0).toUpperCase() + option.slice(1)}</label> &nbsp;&nbsp;
        `).join("");

        return `
            <div class="mb-3">
                <label>${labelWithSymbol}</label><br>&nbsp;&nbsp;
                ${radios}
            </div>
        `;
    }

    // For select dropdowns
    if (type === "select") {
        const optionsHtml = options.map(option => `
            <option value="${option}">${option.charAt(0).toUpperCase() + option.slice(1)}</option>
        `).join("");

        return `
            <div class="mb-3">
                <label for="${name}" class="form-label">${labelWithSymbol}</label>
                <select class="form-select" id="${name}" name="${name}" ${requiredAttribute}>
                    ${optionsHtml}
                </select>
            </div>
        `;
    }

    return "";
}

// Export the function for use in other scripts
module.exports = generateField;
