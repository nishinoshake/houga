<template>
  <section class="privacy">
    <h2 class="privacy-title">プライバシーポリシー</h2>
    <p class="privacy-text">
      本サイトでは、アクセス状況を把握するためにGoogle
      Analyticsを利用しています。<br class="pc" />Google
      Analyticsは、Cookieという仕組みを利用して情報の収集を行います。<br
        class="pc"
      />収集している内容や方法については、下記のリンクからご確認いただけます。
    </p>
    <ul class="privacy-list">
      <li class="privacy-item">
        ・<a
          href="https://policies.google.com/technologies/partner-sites?hl=ja"
          target="_blank"
          rel="noopener"
          >収集した情報のGoogleによる使用</a
        >
      </li>
      <li class="privacy-item">
        ・<a
          href="https://policies.google.com/technologies/cookies?hl=ja"
          target="_blank"
          rel="noopener"
          >GoogleによるCookieの利用方法</a
        >
      </li>
      <li class="privacy-item">
        ・<a
          href="https://policies.google.com/technologies/types?hl=ja"
          target="_blank"
          rel="noopener"
          >Googleが使用しているCookieの種類</a
        >
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.privacy {
  padding: 3rem 2rem 4rem;
  background-color: $color-darker;
  @include desktop {
    padding: 5rem 3rem 5.4rem;
  }
  &-title {
    margin-bottom: 2rem;
    line-height: 1;
    color: $color-white;
    @include font-l;
  }
  &-text {
    line-height: 1.8;
    text-align: justify;
    color: $color-white;
    @include font-m;
  }
  &-list {
    margin-top: 2rem;
  }
  &-item {
    line-height: 1.6;
    color: $color-white;
    @include font-s;
    &:nth-child(n + 2) {
      margin-top: 1rem;
    }
    a {
      padding-bottom: 3px;
      @include link($color-yellow);
    }
  }
}
</style>
