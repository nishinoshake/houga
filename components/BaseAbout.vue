<template>
  <section class="about">
    <h2 class="about-title">
      <img src="/img/logo01.svg" alt="邦画の予告を、朝まで" />
    </h2>
    <div class="about-body">
      <p class="about-text">今日はなんだか邦画が観たい。</p>
      <p class="about-text">
        そう思って探し始めたものの、<br
          class="pc"
        />出てくるのが胸キュンラブストーリーばかりで、<br
          class="pc"
        />やるせない気持ちになった経験はありませんか？
      </p>
      <p class="about-text">
        以前は、映画館で予告を観るのがひそかな楽しみだったのですが、<br
          class="pc"
        />最近は、新しいヒロインや王子様のお披露目会になりつつあるので、<br
          class="pc"
        />目を閉じて予告が終わるまで待つ、なんてこともあります。
      </p>
      <p class="about-text">
        まったく同じ気持ちの人がどれほどいるかはわかりませんが、<br
          class="pc"
        />邦画が好きで、予告も好きだけど、胸キュンはちょっとな・・・<br
          class="pc"
        />というモヤモヤをきっかけに、このサイトを作りました。
      </p>
      <p class="about-text">
        このサイトにない、おすすめの邦画などがありましたら、<br class="pc" /><a
          href="mailto:lawson.and.7.11@gmail.com"
          >メール</a
        >でご連絡いただくか、プログラミングに明るいかたは、<br class="pc" /><a
          href="https://github.com/nishinoshake/houga/issues/1"
          target="_blank"
          rel="noopener"
          >GitHubのイシュー</a
        >に追加していただけたら嬉しいです。
      </p>
      <p class="about-kyun">
        ※冒頭からさんざん胸キュン映画を悪く言いましたが、たまに怖いもの見たさで挑戦するのが楽しみだったりするので、無きゃ無いで寂しい。最近では、ホットギミックが良かったので、時間と心に余裕があるかたはぜひ。
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  @include max {
    padding: 3.5rem 2rem;
  }
  @include min {
    max-width: 1200px;
    padding: 6rem 2rem 6rem 6rem;
  }
  a {
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
      &:hover {
        background-position: right center;
        background-size: 0 100%;
      }
    }
  }
  &-title {
    flex: none;
    @include max {
      width: 2.5rem;
      margin-right: 2rem;
    }
    @include min {
      width: 4.4rem;
      margin-right: 5.8rem;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  &-body {
    min-width: 0;
    flex-grow: 1;
    margin-top: -0.3rem;
  }
  &-text {
    line-height: 1.8;
    text-align: justify;
    @include max {
      font-size: 1.4rem;
    }
    @include min {
      font-size: 1.6rem;
    }
    + .about-text {
      margin-top: 1em;
    }
  }
  &-list {
    margin-top: 1em;
    line-height: 1.8;
    @include max {
      font-size: 1.4rem;
    }
    @include min {
      font-size: 1.4rem;
    }
  }
  &-kyun {
    margin-top: 1em;
    padding: 1em;
    font-size: 1.2rem;
    text-indent: -1em;
    text-align: justify;
    color: $color-muted;
  }
}
</style>
