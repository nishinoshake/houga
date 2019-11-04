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
        <a
          href="https://policies.google.com/technologies/partner-sites?hl=ja"
          target="_blank"
          rel="noopener"
          >・<span>収集した情報のGoogleによる使用</span></a
        >
      </li>
      <li class="privacy-item">
        <a
          href="https://policies.google.com/technologies/cookies?hl=ja"
          target="_blank"
          rel="noopener"
          >・<span>GoogleによるCookieの利用方法</span></a
        >
      </li>
      <li class="privacy-item">
        <a
          href="https://policies.google.com/technologies/types?hl=ja"
          target="_blank"
          rel="noopener"
          >・<span>Googleが使用しているCookieの種類</span></a
        >
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.privacy {
  background-color: $color-darker;
  @include max {
    padding: 3rem 2rem 4rem;
  }
  @include min {
    padding: 5rem 3rem 5.4rem;
  }
  &-title {
    margin-bottom: 2rem;
    line-height: 1;
    color: $color-white;
    @include max {
      font-size: 2rem;
    }
    @include min {
      font-size: 2.5rem;
    }
  }
  &-text {
    line-height: 1.8;
    text-align: justify;
    color: $color-white;
    @include max {
      font-size: 1.4rem;
    }
    @include min {
      font-size: 1.6rem;
    }
  }
  &-list {
    margin-top: 2rem;
  }
  &-item {
    line-height: 1.6;
    &:nth-child(n + 2) {
      margin-top: 1rem;
    }
    a {
      color: $color-white;
      @include max {
        font-size: 1.2rem;
      }
      @include min {
        font-size: 1.4rem;
        &:hover {
          span {
            background-position: right center;
            background-size: 0 100%;
          }
        }
      }
    }
    span {
      padding-bottom: 3px;
      background-repeat: no-repeat;
      background-position: left center;
      background-size: 100% 100%;
      transition: background-size 0.6s $easeOutQuart;
      @include max {
        background-image: linear-gradient(
          transparent calc(100% - 1px),
          currentColor 1px
        );
      }
      @include min {
        background-image: linear-gradient(
          transparent calc(100% - 2px),
          currentColor 2px
        );
      }
    }
  }
}
</style>
