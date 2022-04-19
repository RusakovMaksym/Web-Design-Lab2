import UrlView from './UrlView.js';

export default class UrlListView {
    constructor(urlListModel) {
        this.urlListModel = urlListModel;
        this.controllerOnCheckbox = null;
        this.controllerOnAddLink = null;
    }

    setControllerOnAddLink(controllerOnAddLink) {
        this.controllerOnAddLink = controllerOnAddLink;
    }

    onAddLink(e) {
        let link = document.querySelector('#typeLink');
        var shortLink = ""


        const  request = fetch('https://cutt.ly/api/api.php?key=cb6e9014af99c1735937297960ef782850bd3&short=' + link.value, {
            method: 'POST',
          }).then(response =>{ 
              if (response.ok) {
                return response.json();
                }
                throw alert("Помилка! " + response.statusText);
        })
          .then(data => {
            if(data.url["status"] != 7){
                alert("Помилка вводу! Спробуйте ще!")
            } else {
                shortLink = data.url["shortLink"]
                navigator.clipboard.writeText(data.url["shortLink"])
                alert("Скорочене посилання успішно скопійовано!")
            }
          })

          var today = new Date();
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0');
          var yyyy = today.getFullYear();
          
          var todayStr = mm + '.' + dd + '.' + yyyy;
          alert(todayStr)

          this.controllerOnAddLink(todayStr, link, shortLink);
    }

    toHtml() {
        const itemsHtml = this.urlListModel.items.map( (item) => {
            const urlView = new UrlView(item);
            return urlView.toHtml();
        }).join("");
        return `${itemsHtml}`;
    }
}




