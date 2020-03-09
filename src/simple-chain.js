const chainMaker = {
  chain: [],
  num: 0,

  getLength() {
    this.num = this.chain.length;
    return this.num;
  },
  addLink(value) {
    if (value === "") {
      this.chain.push("( )");
    } else {
      this.chain.push("( " + value + " )")
    }
    return this;
  },
  removeLink(position) {
    this.getLength();
    if (typeof (position) != "number" || position <= 0 || position > this.num ) {
      this.chain = [];
      this.num = 0;
      throw new Error();
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain.join("~~");
    this.chain = [];
    this.num = 0;
    return str;
  }
};

module.exports = chainMaker;
