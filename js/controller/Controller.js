
import User from "../model/User.js";
import Url from "../model/Url.js";


export default class Controller {
    constructor(urlListModel, urlListView) {
        this.urlListModel = urlListModel;
        this.urlListView = urlListView;
        this.urlListModel.setOnChangeCallback((e) => this.onChangeCallback(e));
        this.urlListView.setControllerOnAddLink(this.addLink);
        this.initOnModelChange();
         try {
             document.querySelector('#to-short').addEventListener('click', (e)=>urlListView.onAddLink(e));
            } catch {}
    }

    onChangeCallback() {
        /* updates UI when a model has changed (title, done attributes) */
        document.querySelector('#insert').innerHTML = this.urlListView.toHtml();
    }

    itemToggleDone(id) { 
        this.urlListModel.toggleDone([id]);
    }

    addLink(date, link, shortLink) {
        const url = new Url(date, link, shortLink);
        this.urlListModel.add(url);
    }

   

    initOnModelChange() {
        /* updates UI when a model list has changed (adds, deletes items) */
      
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                document.querySelector('#insert').innerHTML = this.urlListView.toHtml();
                return true;
            }
        }
        this.urlListModel.items = new Proxy(this.urlListModel.items, handler);

    }
}