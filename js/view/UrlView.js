export default class UrlView {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }

    toHtml() {
        const checked = (this.itemModel.done) ? "checked" : "";
        const color = (this.itemModel.done) ? "grey" : "black";
        return `
        <tr>
            <td>${this.itemModel.date}</td>
            <td>${this.itemModel.link}</td>
            <td>${this.itemModel.shortLink}</td>
        </tr>`;
        /*
        return `
            <tr>
                <td style="color: ${color}">
                    ${this.itemModel.name}
                </td>
                <td>
                    <input type="checkbox" data-id="${this.itemModel.id}" ${checked} />                    
                </td>
                <td>
                    <button data-id="${this.itemModel.id}" class="del-button">Delete</button>
                </td>
            </tr>`;
            */
    }
}