import { animateScroll } from 'react-scroll';

export const scrollAlFinal = ( id ) => {

    animateScroll.scrollToBottom({
        containerId: id,
        duration: 0
    })

};
export const scrollAlFinalAnimado = ( id ) => {

    animateScroll.scrollToBottom({
        containerId: id,
        duration: 250
    })

};