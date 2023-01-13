import { GraphQLEnumType } from "graphql";

const objToEnum = (name: any) => {
  return Object.keys(name).reduce((o, key) => {
    return Object.assign(o, { [key]: { value: name[key] } });
  }, {});
};

export const geoType = {
  Point: "Point",
  LineString: "LineString",
  Polygon: "Polygon",
};

export const GeoEnumType = new GraphQLEnumType({
  name: "GeoType",
  values: objToEnum(geoType),
});
