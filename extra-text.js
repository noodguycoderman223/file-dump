class split {
  getInfo() {
    return {
      id: 'split',
      name: 'Split',
      blocks: [
        {
          opcode: 'split',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Split string [ONE] by rule [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello!World'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '!'
            }
          }
        }
      ]
    };
  }

  strictlyEquals(args) {
    return args.ONE.split(args.TWO)
  }
}
Scratch.extensions.register(new split());
