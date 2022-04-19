export default class Url {
    constructor(date, link, shortLink) {
        this.id = Math.round(Math.random() * 100000).toString();
        this.date = date
        this.link = link
        this.shortLink = shortLink
        this.done = false;


        return this.initOnModelChange();
    }

    toggleDone() {
        this.done = !this.done;
        return this.done;
    }
    
    setOnChangeCallback() {
        this.onChangeCallback = onChangeCallback;
    }

    initOnModelChange() {
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                if (this.onChangeCallback) this.onChangeCallback(this);
                return true;
            }
        }
        return new Proxy(this, handler);
    }

}