import { CAMPSITES } from '../share/campsites';
import { COMMENTS } from '../share/comments';
import { PARTNERS } from '../share/partners';
import { PROMOTIONS } from '../share/promotions';

export const initialState = {
    campsites: CAMPSITES,
    comments: COMMENTS,
    partners: PARTNERS,
    promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => {
    return state;
};