import { Reviews, WideOffer, Offers } from '../types/types';
import { RootState } from './index';

export const selectCity = (state: RootState) => state.city;
export const selectOffers = (state: RootState) => state.offers;
export const selectCurrentOffer = (state: RootState): WideOffer | null => state.currentOffer;
export const selectReviews = (state: RootState): Reviews => state.reviews;
export const selectNearbyOffers = (state: RootState): Offers => state.nearbyOffers;
export const selectLoadingStatusOffers = (state: RootState): boolean => state.isLoadingOffers;
export const selectLoadingStatusOffer = (state: RootState): boolean => state.isLoadingOffer;
export const selectLoadingStatusReviews = (state: RootState): boolean => state.isLoadingReviews;
export const selectLoadingStatusNear = (state: RootState): boolean => state.isLoadingNear;
export const selectAuthorizationStatus = (state: RootState) => state.authorizationStatus;
export const selectUserData = (state: RootState) => state.userData;
export const selectFavorites = (state: RootState): Offers => state.favorites;
export const selectLoadingStatusFavorites = (state: RootState): boolean => state.isLoadingFavorites;
