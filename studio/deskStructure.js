import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Landing Page")
        .child(
          S.document().schemaType("landingPage").documentId("landingPage")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !["landingPage"].includes(listItem.getId())
      ),
    ]);
