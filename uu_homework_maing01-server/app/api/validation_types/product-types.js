/* eslint-disable */

const getProductDtoInType = shape({
  id: uu5String(512).isRequired(),
});

const getProductCheckedDtoInType = shape({
  id: uu5String(512).isRequired(),
  checkedInList: boolean().isRequired(),
});
