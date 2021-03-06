import Immutable from 'immutable'

export default (state = Immutable.List([
  {sender:"henri@ruggedcode.com", text:'Hi', date: new Date(), avatar: "d63acca1aeea094dd10565935d93960b"},
  {sender:"not_me@ruggedcode.com", text:'Welcome!', date: new Date()}
]), action) => {
  switch(action.type) {
    case 'sendMessage':
      return state.push(action.message)
    default:
      return state
  }
}
