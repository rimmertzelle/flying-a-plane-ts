/** Class representing a plane */
class Plane{
  private _el : any = document.createElement('img');
  private _className : string = 'plane';
  private _baseUrl : string = './assets/images/'
  private _imageName : string;
  private _xPos : number = 0;
  private _yPos : number = 0;
  private _keyboardListener: KeyListener;

  /**
  * Create a plane
  * @param {string} img - representing a image
  */
  constructor(img : string){
    this._imageName = img;
    //creating a Dom Element
    const game = document.querySelector('.container');
    this._el.setAttribute('src', this._baseUrl + this._imageName);
    this._el.className = 'plane';
    game.appendChild(this._el);
    this._keyboardListener = new KeyListener(); //append a keyboardListener
  }

  /**
  * Move a plane
  */
  public move(){
    const currentMovement = this._keyboardListener.keyevents; //could be loosely coupled by pubsub system
    if(currentMovement.up == true ){
      this._yPos += 5;
    }
    if (currentMovement.right == true) {
        this._xPos += 5;
    } else if (currentMovement.left == true) {
      this._xPos -= 5;
    }
  }

  /**
  * Render coordinates on the Dom
  */
  public render(){
    this._el.style.bottom = this._yPos + 'px';
    this._el.style.left = this._xPos + 'px';
  }

  /**
  * Get the Element (DOM) representation
  * @return {any} The el value
  */
  get el(): any{
    return this._el;
  }
}
