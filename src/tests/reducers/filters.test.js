import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should set up default filter value', ()=>{
    const state = filtersReducer(undefined, {
        type: '@@INT'
    });

    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')

    });
});