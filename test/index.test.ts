import { AirThai } from '../src/index';
test('Get air', () => {
  return AirThai({ lat: 13.670809600000002, long: 100.6501888 }).then(data => {
    expect(typeof data).toBe("object");
  });
});
