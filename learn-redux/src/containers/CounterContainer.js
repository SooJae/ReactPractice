import React from 'react';
import Counter from '../components/Counter';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer(props) {
  // store.getState() 와 같은 기능
  // const { number, diff } = useSelector(state => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff
  // }));

  // 첫번째 방법
  //const number = useSelector(state => state.counter.number);
  //const diff = useSelector(state => state.counter.diff);

  // 두번째 방법
  const { number, diff } = useSelector(
    state => ({
      number: state.counter.number,
      diff: state.counter.diff
    }),
    shallowEqual
    //(left, right) => {
    //  return left.diff === right.diff && left.number === right.number;
    // }
  );
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
