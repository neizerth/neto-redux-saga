import { createSlice } from '@reduxjs/toolkit';
import { pick } from '../util';

const NAME = 'search';

export const searchSlice = createSlice({
  name: NAME,
  initialState: {
    query: '',
    results: [],
    pending: false,
    error: null
  },
  reducers: {
    setQuery(state, { payload }) {
      state.query = payload;
    },
    requestSuccess(state, { payload }) {
      state.results = payload;
      state.error = null;
      state.pending = false;
    },
    requestFailed(state, { payload }) {
      state.results = [];
      state.error = payload;
      state.pending = false;
    },
    createRequest(state) {
      state.pending = true;
    }
  },
  selectors: {
    selectPending: pick('pending'),
    selectError: pick('error'),
    selectResults: pick('results')
  }
});

export const {
  selectError,
  selectPending,
  selectResults
} = searchSlice.selectors;

export const { 
  setQuery, 
  createRequest,
  requestSuccess,
  requestFailed
} = searchSlice.actions;

export default searchSlice.reducer;