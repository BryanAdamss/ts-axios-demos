class Emploee {
  private _fullName: string

  get fullName(): string {
    return this.fullName
  }

  // setter不需要返回
  set fullName(name: string) {
    this._fullName = name
  }
}

const e = new Emploee()
e.fullName = 'test'
