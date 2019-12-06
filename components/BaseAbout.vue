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
        />胸キュンものばかりが目についてしまい、<br
          class="pc"
        />気になる映画になかなか出会えない。
      </p>
      <p class="about-text">
        以前は、映画館で予告を観るのがひそかな楽しみだったのですが、<br
          class="pc"
        />ここ何年かは、次はこの映画を観よう！と思える予告が少なく、<br
          class="pc"
        />はやく本編が始まらないかなーと思ってしまうこともあります。
      </p>
      <p class="about-text">
        同じ気持ちの人が、どれほどいるかはわかりませんが、<br
          class="pc"
        />邦画に絞って、本編が気になる予告を集めました。<br
          class="pc"
        />（なかには、面白かった胸キュンものもあります）
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
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  padding: 3.5rem 2rem;
  @include desktop {
    max-width: $width-large;
    padding: 6rem 3rem 6rem 6rem;
  }
  a {
    @include link($color-link);
  }
  &-title {
    width: 2.5rem;
    margin-right: 2rem;
    flex: none;
    @include desktop {
      width: 3.66rem;
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
    @include font-m;
    + .about-text {
      margin-top: 1em;
    }
  }
  &-list {
    margin-top: 1em;
    line-height: 1.8;
    @include font-s;
  }
  &-kyun {
    margin-top: 1em;
    padding: 1em;
    text-indent: -1em;
    text-align: justify;
    color: $color-muted;
    @include font-xs;
  }
}
</style>
