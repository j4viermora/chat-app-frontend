import moment from 'moment';

export const hourMonth = ( date ) => {

    const hoyMes = moment( date );

    return hoyMes.format( 'HH:mm a | MMMM Do' );

};