const mesureWidth = item => {
    let reqItemWidth = 0;
    const screenWidth = $(window).width();
    const container = item.closest(".color-menu");
    const titleBlocks = container.find(".color-menu__title");
    const titleWidth = titleBlocks.width() * titleBlocks.length;

    const textContainer = item.find(".color-menu__container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        reqItemWidth = screenWidth - titleWidth;
    } else {
        reqItemWidth = 500;
    }

    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingLeft - paddingRight
    }
};

const closeEveryItemInContainer = container => {
    const items = container.find(".color-menu__item");
    const content = container.find(".color-menu__content");

    items.removeClass("active");
    content.width(0);
}
const openItemColor = item => {
    const hiddenContent = item.find(".color-menu__content");
    const reqWidth = mesureWidth(item);
    const textBlock = item.find(".color-menu__container");

    item.addClass("active");
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);
}

$(".color-menu__title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".color-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".color-menu");

    if (itemOpened) {
        closeEveryItemInContainer(container);
    } else {
        closeEveryItemInContainer(container);
        openItemColor(item);
    }
});

$(".color-menu__close").on("click", e => {
    e.preventDefault();

    closeEveryItemInContainer($(".color-menu"));
})