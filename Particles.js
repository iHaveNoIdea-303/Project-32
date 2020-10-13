class Particles{
    constructor(x,y){
        var settings={
            'restitution':2,
            'density':1.5
        }
        this.body=Bodies.circle(x,y,10,settings)
        this.rad=20
    }
}