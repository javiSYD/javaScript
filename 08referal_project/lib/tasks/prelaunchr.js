require("csv");

namespace("prelaunchr", () => {
  desc("Will out put CSV's for each group of users you should email");

  task({create_winner_csvs: "environment"}, () => {
    let stops = User.REFERRAL_STEPS.map(stop => stop.count);
    let winners = new Hash((h, k) => h[k] = []);

    User.all.each((user) => {
      let found = null;

      stops.reverse_each((stop) => {
        if (stop <= user.referrals.count && !found) found = stop
      });

      if (found) winners[found].push(user)
    });

    winners.each((stop, list) => (
      CSV.open(
        `${Rails.root}/lib/assets/group_${stop}.csv`,
        "wb",
        csv => list.each(user => csv << [user.email, user.referrals.count])
      )
    ))
  })
})