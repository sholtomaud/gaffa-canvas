# gaffa-canvas

canvas view for gaffa

## Install:

    npm i gaffa-canvas

## Add to gaffa:

    gaffa.registerConstructor(require('gaffa-canvas'));

# API

## Properties (instanceof Gaffa.Property)

### value (get and set)

    The rendered elements value.

    when the rendered element triggers a change event, it will set the elements value into this binding.

    The event which causes the element to set the value can be overriden by assigning an event name to 'updateEventName':

        canvas.updateEventName = 'keyup';

### width (get)

    The rendered elements width attribute.

### height (get)

    The rendered elements height attribute.

### id (get)

    The rendered elements id attribute.
