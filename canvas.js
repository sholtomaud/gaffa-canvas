var Gaffa = require('gaffa'),
    crel = require('crel');

function Canvas(){}
Canvas = Gaffa.createSpec(Canvas, Gaffa.ContainerView);
Canvas.prototype._type = 'canvas';

Canvas.prototype.render = function(){
    var textNode = document.createTextNode(''),
        renderedElement = crel(this.tagName || 'canvas');

    this.views.content.element = renderedElement;

    this.renderedElement = renderedElement;
};

Canvas.prototype.width = new Gaffa.Property(function(view, value){
    if( typeof value == 'undefined' ){
        view.renderedElement.removeAttribute('width');
        return;
    }
    
    view.renderedElement.setAttribute('width', value);
});

Canvas.prototype.height = new Gaffa.Property(function(view, value){
    if( typeof value == 'undefined' ){
        view.renderedElement.removeAttribute('height');
        return;
    }
    
    view.renderedElement.setAttribute('height', value);
});

Canvas.prototype.id = new Gaffa.Property(function(view, value){
    if( typeof value == 'undefined' ){
        view.renderedElement.removeAttribute('id');
        return;
    }
    
    view.renderedElement.setAttribute('id', value);
});

module.exports = Canvas;