// напишите код который успешно выполнит тест ниже

describe('Step 5', function() {
  it('add(2,8)(5).value() => 15', function() {
    add(2,8)(5).value()
      .should.be.exactly(15).and.be.a.Number;
  });
});
