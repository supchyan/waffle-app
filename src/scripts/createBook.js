export default {
    data: () => ({
      _bookCol: '#c12120',
      _bookName: 'Без названия ',
      _bookNum: 1,
    }),

    methods: {
      setName() {
        this._bookName += this._bookNum
        return this._bookName
      }
    },
  }