/* @flow */

/* globals React */
import {size} from 'test/size'
import * as $ from 'jQuery'

const result = size(null);

//////////////////////////////////

class Test extends React.Component {}

declare function something(): void;

function foo(x: { y: ?string }): string {
  if (x.y) {
    var y = x.y;
    something();
    return y; // OK: something couldn't have changed y
  } else {
    return "default";
  }
}

async function getFriendNames(
  friendIDs: Promise<number[]>,
  getFriendName: (id: number) => Promise<string>,
): Promise<string[]> {
  var ids = await friendIDs;
  var names = await Promise.all(ids.map(getFriendName));
  return names;
}



      Noun :> City :> SanFrancisco
      ~~~~~~~~ ^ ~~~~~~~~~~~~~~~~
Covariance    :>
Contrvariance <:
