import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import landingPage from "./documents/landingPage";
import route from "./documents/routes";
import page from "./documents/page";
import blog from "./documents/blog";
import author from "./documents/author";

import heroSection from "./objects/heroSection";
import whyUsSection from "./objects/whyUsSection";
import reason from "./objects/reason";
import servicesSection from "./objects/servicesSection";
import service from "./objects/service";
import reviewsSection from "./objects/reviewsSection";
import testimonial from "./objects/testimonial";
import imageSection from "./objects/imageSection";
import textSection from "./objects/textSection";

import itemListSection from "./objects/itemListSection";
import item from "./objects/item";
import simplePortableText from "./objects/simplePortableText";
import portableText from "./objects/portableText";
import link from "./objects/link";
import internalLink from "./objects/internalLink";
import cta from "./objects/cta";
import figure from "./objects/figure";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    blog,
    author,
    landingPage,
    heroSection,
    route,
    page,
    whyUsSection,
    reason,
    servicesSection,
    service,
    reviewsSection,
    testimonial,
    itemListSection,
    item,
    imageSection,
    textSection,
    link,
    internalLink,
    simplePortableText,
    portableText,
    figure,
    cta,
  ]),
});
