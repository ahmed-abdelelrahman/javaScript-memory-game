class progressBar extends HTMLElement{
    static css =`
     /*:host  add style to <progress-bar></progress-bar>*/
    :host{
        display:block;
        width:250px;
        height:40px;
        background:#eeee;
        border-radius:4px;
        overflow:hidden;
    }
    /* add style to fill div */
    .fill{
        height:100%;
        width:50%;
        transition:width .25s;
        background:green;
    }
    `;

    // mehtod in javaScript classes to observe properity to other method attributeChangedCallback() such  can see it 
    static get observedAttributes(){
        return ['percent']
    }
    constructor (){
        // refer to HTMLElement (thing that after extends)
        super();
        // mode open to make it acessiable
        this.attachShadow({'mode':'open'})
        const style=document.createElement('style')
        const fill=document.createElement('div')

        style.innerHTML=progressBar.css
        fill.classList.add('fill')

        this.shadowRoot.append(style,fill)

    }
    get percent(){
        const value= this.getAttribute('percent')
        if(isNaN(value)){
            return 0
        }
        if (value < 0){
            return 0
        }
        if(value>100){
            return 100
        }
        return Number(value);
    }
    set percent(value){
        this.setAttribute('percent',value)
    }
    attributeChangedCallback(name){
        if(name === 'percent'){
            this.shadowRoot.querySelector('.fill').style.width=`${this.percent}%`
        }
    }
    
        
}
// create <progress-bar></progress-bar>
customElements.define('progress-bar',progressBar);