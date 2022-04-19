import UrlListModel from './model/UrlListModel.js';
import UrlListView from './view/UrlListView.js';
import Controller from './controller/Controller.js';


let urlListModel = new UrlListModel();
let urlListView = new UrlListView(urlListModel);

let controller = new Controller(urlListModel, urlListView);

//controller.addItem('First Item');
//controller.addItem('Second Item');
controller.addLink("18.04.2022", "long link", "short link");
controller.addLink("19.04.2022", "long link2", "short link2");


//itemListModel.delete(item1.id);
//itemListModel.toggleDone([item2.id]);

