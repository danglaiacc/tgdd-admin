import React, { useState } from "react";
import Select from "react-select";
import {
  Button,
  Row,
  Col,
  FormGroup,
  Input,
  Card,
  CardBody,
  Badge,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import {
  Grid,
  List,
  Search,
  Star,
  Heart,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Menu,
  Plus
} from "react-feather";
import { data } from "./shopData";
import { Link } from "react-router-dom";
import "../../../../assets/scss/plugins/forms/react-select/_react-select.scss";
const sortOptions = [
  {
    value: "featured",
    label: "Featured",
  },
  {
    value: "lowest",
    label: "Lowest",
  },
  {
    value: "highest",
    label: "Highest",
  },
];

export default function PhoneContent({ mainSidebar }) {
  const [view, setView] = useState("grid-view");
  const [cart, setCart] = useState([])
  const [wishList, setWishList] = useState([])

  const renderProducts = data.map((product, i) =>  (
      <Card className="ecommerce-card" key={i}>
        <div className="card-content">
          <div className="item-img text-center">
            <Link to="/ecommerce/product-detail">
              <img className="img-fluid" src={product.img} alt={product.name} />
            </Link>
          </div>
          <CardBody>
            <div className="item-wrapper">
              <div className="item-rating">
                <Badge color="primary" className="badge-md">
                  <span className="mr-50 align-middle">4</span>
                  <Star size={14} />
                </Badge>
              </div>
              <div className="product-price">
                <h6 className="item-price">{product.price}</h6>
              </div>
            </div>
            <div className="item-name">
              <Link to="/ecommerce/product-detail">
                <span>{product.name}</span>
              </Link>
              <p className="item-company">
                By <span className="company-name">{product.by}</span>
              </p>
            </div>
            <div className="item-desc">
              <p className="item-description">{product.desc}</p>
            </div>
          </CardBody>
          <div className="item-options text-center">
            <div className="item-wrapper">
              <div className="item-rating">
                <Badge color="primary" className="badge-md">
                  <span className="mr-50 align-middle">4</span>
                  <Star size={14} />
                </Badge>
              </div>
              <div className="product-price">
                <h6 className="item-price">{product.price}</h6>
              </div>
            </div>
            <div className="wishlist" onClick={() => setWishList([...wishList,i])}>
              <Heart
                size={15}
                fill={
                  wishList.includes(i) ? "#EA5455" : "transparent"
                }
                stroke={
                  wishList.includes(i) ? "#EA5455" : "#626262"
                }
              />
              <span className="align-middle ml-50">Wishlist</span>
            </div>
            <div className="cart" onClick={() => setCart([...cart,i])}>
              <ShoppingCart size={15} />
              <span className="align-middle ml-50">
                {cart.includes(i) ? (
                  <Link to="/ecommerce/checkout" className="text-white">
                    {" "}
                    View In Cart{" "}
                  </Link>
                ) : (
                  "Add to cart"
                )}
              </span>
            </div>
          </div>
        </div>
      </Card>
    )
  );
  return (
    <div>
      <div className="shop-content">
        <Row>
          <Col sm="12">
            <div className="ecommerce-header-items">
              <div className="result-toggler w-25 d-flex align-items-center">
                <div className="shop-sidebar-toggler d-block d-lg-none">
                  <Menu size={26} onClick={() => mainSidebar(true)} />
                </div>
                <div className="search-results">16285 Results Found</div>
              </div>
              <div className="view-options d-flex justify-content-end w-75">
                <Link
                  color="success"
                  className="btn-icon btn-round btn btn-success mr-1"
                  style={{"height":"36px"}}
                  to="/phone/add"
                >
                  <Plus size={24} />
                </Link>
                <Select
                  className="React-Select w-25" 
                  classNamePrefix="select"
                  defaultValue={sortOptions[0]}
                  name="sort"
                  options={sortOptions}
                />
                <div className="view-btn-option">
                  <Button
                    color="white"
                    className={`view-btn ml-1 ${
                      view === "grid-view" ? "active" : ""
                    }`}
                    onClick={() => setView("grid-view")}
                  >
                    <Grid size={24} />
                  </Button>
                  <Button
                    color="white"
                    className={`view-btn ${
                      view === "list-view" ? "active" : ""
                    }`}
                    onClick={() => setView("list-view")}
                  >
                    <List size={24} />
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="12">
            <div className="ecommerce-searchbar mt-1">
              <FormGroup className="position-relative">
                <Input
                  className="search-product"
                  placeholder="Search Here..."
                />
                <div className="form-control-position">
                  <Search size={22} />
                </div>
              </FormGroup>
            </div>
          </Col>
          <Col sm="12">
            <div id="ecommerce-products" className={view}>
              {renderProducts}
            </div>
          </Col>
          <Col sm="12">
            <div className="ecommerce-pagination">
              <Pagination className="d-flex justify-content-center mt-2">
                <PaginationItem className="prev-item">
                  <PaginationLink href="#" first>
                    <ChevronLeft />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">6</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">7</PaginationLink>
                </PaginationItem>
                <PaginationItem href="#" className="next-item">
                  <PaginationLink href="#" last>
                    <ChevronRight />
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
