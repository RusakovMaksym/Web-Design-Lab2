import UserView from './UserView.js';

export default class UserListView {
    constructor(itemListModel) {
        this.itemListModel = itemListModel;
        this.controllerOnCheckbox = null;
        this.controllerOnAddItem = null;
    }

    setControllerOnCheckbox(controllerOnCheckbox) {
        this.controllerOnCheckbox = controllerOnCheckbox;
    }

    setControllerOnAddItem(controllerOnAddItem) {
        this.controllerOnAddItem = controllerOnAddItem;
    }



    onAddItem(e) {
        let name = document.querySelector('#typeName');
        let dob = document.querySelector('#dob');
        let gender = document.querySelector('#gender');
        let email = document.querySelector('#typeEmail');
        let password = document.querySelector('#typePassword');

        //this.controllerOnAddItem()
    }

    toHtml() {}
}




