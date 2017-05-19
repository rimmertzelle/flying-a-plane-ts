/** Class representing a Game */
class Game{

  private _el : Element = document.querySelector('.container');
  private _plane : Plane;
  private _windowListener: WindowListener;
  private _collision: Collision;

  /**
  * Create a game
  */
  constructor(){
    this._plane = new Plane('plane.svg');
    this._windowListener = new WindowListener();
    this._collision = new Collision(this);
  }

  /**
  * start the game
  */
  private start(){
    this.loop();
  }

  /**
  * Game loop 60 frames per seconds
  */
  private loop = () => {
    this.move();
    this.collide();
    this.render();
    setTimeout(this.loop, 1000/60);
  }

  /**
  * Render the game objects
  */
  public render(){
    this._plane.render();
  }

  /**
  * Move all game objects
  */
  public move(){
    this._plane.move();
  }

  /**
  * Check collision of different game objects
  */
  private collide(){
    this._collision.collide();
  }

  /**
  * Get the plane
  * @return {Plane} The plane value
  */
  get plane(): Plane{
    return this._plane;
  }

  /**
  * Get the windowListener
  * @return {WindowListener} The windowListener value
  */
  get windowListener(): WindowListener{
    return this._windowListener;
  }

}
