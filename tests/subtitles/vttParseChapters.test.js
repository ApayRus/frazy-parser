import { parseChapters } from '../../parsers/subtitles.js'

const vttExample = `WEBVTT

NOTE CHAPTER
title: 1. Prehistory from Gramma
description: Gramma tells a legend about how the World was created.
start: 51

1
00:00:55.140 --> 00:00:56.683
GRAMMA: In the beginning...

2
00:00:56.850 --> 00:00:59.686
there was only ocean...

3
00:00:59.853 --> 00:01:03.815
until the mother island emerged.

4
00:01:03.982 --> 00:01:05.817
Te Fiti.

5
00:01:06.443 --> 00:01:10.196
Her heart held the greatest power ever known.

6
00:01:10.363 --> 00:01:13.324
It could create life itself.

7
00:01:13.491 --> 00:01:17.704
And Te Fiti shared it with the world.

8
00:01:20.165 --> 00:01:21.374
But in time...

9
00:01:21.541 --> 00:01:24.544
some began to seek Te Fiti's heart.

10
00:01:24.711 --> 00:01:26.838
They believed if they could possess it...

11
00:01:27.005 --> 00:01:30.633
the great power of creation would be theirs.

12
00:01:30.800 --> 00:01:33.178
And one day...

13
00:01:33.720 --> 00:01:36.306
the most daring of them all...

14
00:01:36.473 --> 00:01:40.852
voyaged across the vast ocean to take it.

15
00:01:42.145 --> 00:01:47.025
He was a demigod of the wind and sea.

16
00:01:48.485 --> 00:01:50.069
He was a warrior.

17
00:01:51.196 --> 00:01:52.572
A trickster.

18
00:01:55.033 --> 00:01:57.243
A shapeshifter who could change form...

19
00:01:58.286 --> 00:02:01.039
with the power of his magical fish hook.

20
00:02:02.874 --> 00:02:04.375
And his name...

21
00:02:05.210 --> 00:02:07.420
was Maui.

22
00:02:12.217 --> 00:02:13.218
(CHUCKLES)

23
00:02:13.760 --> 00:02:14.969
(RUMBLING)

24
00:02:16.888 --> 00:02:21.392
But without her heart, Te Fiti began to crumble...

25
00:02:21.559 --> 00:02:24.312
giving birth to a terrible darkness.

26
00:02:42.747 --> 00:02:44.374
Maui tried to escape...

27
00:02:44.916 --> 00:02:47.919
but was confronted by another who sought the heart.

28
00:02:50.755 --> 00:02:52.423
Te Kā!

29
00:02:52.590 --> 00:02:55.593
A demon of earth and fire.

30
00:03:03.226 --> 00:03:06.104
Maui was struck from the sky...

31
00:03:07.355 --> 00:03:09.691
never to be seen again.

32
00:03:10.275 --> 00:03:14.946
And his magical fish hook and the heart of Te Fiti...

33
00:03:15.113 --> 00:03:17.907
were lost to the sea.

34
00:03:18.616 --> 00:03:20.243
Where, even now...

35
00:03:20.410 --> 00:03:22.370
1,000 years later...

36
00:03:22.537 --> 00:03:25.123
Te Kā and the demons of the deep...

37
00:03:25.290 --> 00:03:27.292
still hunt for the heart.

38
00:03:27.709 --> 00:03:31.796
Hiding in a darkness that will continue to spread...

39
00:03:31.963 --> 00:03:34.257
chasing away our fish...

40
00:03:34.424 --> 00:03:37.635
draining the life from island after island...

41
00:03:37.802 --> 00:03:41.055
until every one of us is devoured...

42
00:03:41.222 --> 00:03:43.892
by the bloodthirsty jaws...

43
00:03:44.058 --> 00:03:46.811
of inescapable death!

44
00:03:48.479 --> 00:03:49.814
(WAILING)

45
00:03:52.066 --> 00:03:53.651
But one day...

46
00:03:53.818 --> 00:03:55.820
the heart will be found...

47
00:03:55.987 --> 00:03:59.073
by someone who will journey beyond our reef...

48
00:03:59.240 --> 00:04:00.575
find Maui...

49
00:04:00.783 --> 00:04:02.827
deliver him across the great ocean...

50
00:04:02.994 --> 00:04:05.163
to restore Te Fiti's heart...

51
00:04:05.330 --> 00:04:06.998
and save us all.

52
00:04:07.957 --> 00:04:09.709
Whoa, whoa, whoa! Thank you, Mother. That's enough.

53
00:04:09.792 --> 00:04:10.752
Papa.

54
00:04:10.835 --> 00:04:12.670
No one goes outside the reef.

55
00:04:12.837 --> 00:04:15.924
We are safe here. There is no darkness.

56
00:04:16.090 --> 00:04:17.842
There are no monsters.

57
00:04:20.803 --> 00:04:21.804
Monsters!

58
00:04:21.971 --> 00:04:24.015

- There's no monsters, no monsters...
  -it's the darkness!

59
00:04:24.515 --> 00:04:28.186
No, there is nothing beyond our reef, but storms and rough seas.

60
00:04:28.353 --> 00:04:29.479
I'm gonna throw up.

61
00:04:29.646 --> 00:04:31.814
TUI: As long as we stay on our very safe island...

62
00:04:32.523 --> 00:04:33.816
...we'll be fine.

63
00:04:33.983 --> 00:04:35.443
GRAMMA: The legends are true.

64
00:04:35.610 --> 00:04:37.195
Someone will have to go.

65
00:04:37.403 --> 00:04:39.530
TUI: Mother, Motunui is paradise.

66
00:04:39.781 --> 00:04:42.367
Who would want to go anywhere else?

NOTE CHAPTER
title: 2. Moana finds Te Fiti's heart
start: 4:54

67
00:04:55.880 --> 00:04:57.548
(BIRDS SCREECHING)

68
00:05:18.695 --> 00:05:20.738
Shoo,shoo!

69
00:05:33.835 --> 00:05:34.836
(EXCLAIMING)

70
00:05:39.007 --> 00:05:40.550
(ETHEREAL WHISPERING)

71
00:05:46.472 --> 00:05:47.557
(GIGGLING)

72
00:06:43.946 --> 00:06:45.490
(GIGGLING)

73
00:07:01.422 --> 00:07:02.715
TUI: Moana!

74
00:07:17.980 --> 00:07:20.858
There you are, Moana.
What are you doing? You scared me.

75
00:07:21.025 --> 00:07:22.652
What? I wanna's go back.

76
00:07:22.819 --> 00:07:25.404
I know, I know. But you don't go out there.

77
00:07:26.322 --> 00:07:27.532
It's dangerous.

78
00:07:29.283 --> 00:07:31.536
Moana, come on.

79
00:07:31.702 --> 00:07:33.704
Let's go back to the village.

80
00:07:35.498 --> 00:07:37.750
You are the next great chief
of our people.

81
00:07:37.917 --> 00:07:40.920
And you will do wondrous things,
my little minnow.

82
00:07:41.504 --> 00:07:45.466
Oh, yes. But first, you must learn
where you're meant to be.

NOTE CHAPTER
title: 3. Song of the village of Motunui
start: 7:56

83
00:07:57.562 --> 00:07:59.313
Moana

84
00:07:59.480 --> 00:08:01.858
Make way, make way

85
00:08:02.024 --> 00:08:03.901
Moana, it's time you knew

86
00:08:04.068 --> 00:08:07.822
The village of Motunui is all you need

87
00:08:07.989 --> 00:08:10.074
The dancers are practicing

88
00:08:10.283 --> 00:08:12.577
They dance to an ancient song

89
00:08:12.743 --> 00:08:15.580
Who needs a new song This old one's all we need

90
00:08:15.746 --> 00:08:17.665
This tradition is our mission

91
00:08:17.790 --> 00:08:20.418
And Moana, there's so much to do

92
00:08:20.585 --> 00:08:21.961
Don't trip on the taro root

93
00:08:22.128 --> 00:08:24.255
That's all you need

94
00:08:24.422 --> 00:08:26.382
We share everything we make

95
00:08:26.549 --> 00:08:28.426
We joke and we weave our baskets

96
00:08:28.593 --> 00:08:30.887
The fishermen come back from the sea

97
00:08:31.053 --> 00:08:32.555
I wanna see

98
00:08:32.722 --> 00:08:34.473
Don't walk away

99
00:08:34.640 --> 00:08:36.559
Moana, stay on the ground now

100
00:08:36.726 --> 00:08:38.603
Our people will need a chief

101
00:08:38.769 --> 00:08:40.688

- And there you are
- There you are

102
00:08:40.855 --> 00:08:42.732
There comes a day

103
00:08:42.899 --> 00:08:46.611
When you're gonna look around
And realize happiness is

104
00:08:46.777 --> 00:08:48.613
Where you are

105
00:08:48.863 --> 00:08:50.364
Consider the coconut

106
00:08:50.573 --> 00:08:52.742

- The what
- Consider its tree

107
00:08:52.909 --> 00:08:56.287
We use each part of the coconut
It's all we need

108
00:08:56.954 --> 00:08:58.915
We make our nets from the fibers

109
00:08:59.081 --> 00:09:00.917
The water is sweet inside

110
00:09:01.083 --> 00:09:05.213
We use the leaves to build fires
We cook up the meat inside

111
00:09:05.379 --> 00:09:07.131
Consider the coconuts

112
00:09:07.298 --> 00:09:09.050
The trunks and the leaves

113
00:09:09.217 --> 00:09:11.719
The island gives us what we need

114
00:09:11.886 --> 00:09:13.638
And no one leaves

115
00:09:13.804 --> 00:09:15.264
That's right, we stay

116
00:09:15.431 --> 00:09:17.058
We're safe and we're well-provided

117
00:09:17.225 --> 00:09:19.143
And when we look to the future

118
00:09:19.310 --> 00:09:20.811
There you are

119
00:09:21.437 --> 00:09:23.648
You'll be okay

120
00:09:23.814 --> 00:09:25.608
In time you'll learn just as I did

121
00:09:25.775 --> 00:09:29.487
You must find happiness
right where you are

122
00:09:35.785 --> 00:09:39.997
I like to dance with the water
The undertow and the waves

123
00:09:40.164 --> 00:09:44.168
The water is mischievous
Ha! I like how it misbehaves

124
00:09:44.335 --> 00:09:48.256
The village may think I'm crazy
Or say that I drift too far

125
00:09:48.422 --> 00:09:52.927
But once you know what you like
Well, there you are

126
00:09:54.845 --> 00:09:58.975
You are your father's daughter
Stubbornness and pride

127
00:09:59.141 --> 00:10:03.437
Mind what he says but remember
You may hear a voice inside

128
00:10:03.604 --> 00:10:07.775
And if the voice starts to whisper
To follow the farthest star

129
00:10:07.942 --> 00:10:11.445
Moana, that voice inside
is who you are

NOTE CHAPTER
title: 4. Father shows the mountain of leaders
start: 10:13

130
00:10:14.573 --> 00:10:16.534

- Uh-huh.
- Dad!

131
00:10:16.701 --> 00:10:20.162
I was only looking at the boats.
I wasn't gonna get on 'em.

132
00:10:22.748 --> 00:10:23.791
(SIGHS)

133
00:10:23.874 --> 00:10:27.461
Come on.
There's something I need to show you.

134
00:10:29.338 --> 00:10:33.050
I've wanted to bring you here from
the moment you opened your eyes.

135
00:10:33.467 --> 00:10:35.720
This is a sacred place.

136
00:10:35.886 --> 00:10:37.888
A place of chiefs.

137
00:10:38.055 --> 00:10:39.557
There will come a time...

138
00:10:39.724 --> 00:10:44.687
when you will stand on this peak
and place a stone on this mountain.

139
00:10:44.854 --> 00:10:47.398
Like I did. Like my father did.

140
00:10:47.565 --> 00:10:51.569
And his father, and every chief
that has ever been.

141
00:10:52.153 --> 00:10:53.738
And on that day...

142
00:10:53.904 --> 00:10:56.157
when you add your stone...

143
00:10:56.324 --> 00:10:59.869
you will raise this whole island higher.

144
00:11:00.202 --> 00:11:02.830
You are the future of our people, Moana.

145
00:11:02.997 --> 00:11:05.541
And they are not out there.

146
00:11:05.708 --> 00:11:08.586
They are right here.

147
00:11:08.753 --> 00:11:11.922
It's time to be who they need you to be.

NOTE CHAPTER
title: 5. Song about Home (Island)
start: 11:12

148
00:11:13.299 --> 00:11:15.509

- We make our nets from the fibers
- We weave our nets from the fibers

149
00:11:15.593 --> 00:11:17.678

- The water is sweet inside
- A real tasty treat inside

150
00:11:17.803 --> 00:11:20.014

- We use the leaves to build fires
- We sing these songs in our choirs

151
00:11:20.097 --> 00:11:21.932

- To cook up the meat inside
- We have mouths to feed inside

152
00:11:22.099 --> 00:11:23.934

- The village believes in us
- That's right

153
00:11:24.101 --> 00:11:25.603
The village believes

154
00:11:25.770 --> 00:11:27.938
The island gives us what we need

155
00:11:28.105 --> 00:11:30.107
And no one leaves

156
00:11:30.274 --> 00:11:31.609
So here I'll stay

157
00:11:31.942 --> 00:11:35.613
My home, my people beside me
And when I think of tomorrow

158
00:11:35.780 --> 00:11:37.823
There we are

159
00:11:38.240 --> 00:11:39.784
I'll lead the way

160
00:11:40.117 --> 00:11:41.952
I'll have my people to guide me

161
00:11:42.119 --> 00:11:43.746
We'll build our future together

162
00:11:43.913 --> 00:11:45.956
Where we are

163
00:11:46.290 --> 00:11:47.833
'Cause every path leads ya back to

164
00:11:48.250 --> 00:11:49.460
Where you are

165
00:11:50.044 --> 00:11:51.921
You can find happiness right

166
00:11:52.338 --> 00:11:53.964
Where you are

167
00:11:54.298 --> 00:11:57.134
Where you are

NOTE CHAPTER
title: 6. Moana solves village problems
start: 12:00

168
00:12:00.930 --> 00:12:04.475
And every storm, this roof leaks,
no matter how many fronds I add.

169
00:12:04.642 --> 00:12:05.643
MOANA: Fixed!

170
00:12:05.810 --> 00:12:06.936
Not the fronds.

171
00:12:09.271 --> 00:12:11.232

- Wind shifted the post.

172
00:12:11.690 --> 00:12:14.360

- Mmm! That's good pork!
- (PUA GRUNTING)

173
00:12:16.654 --> 00:12:18.489
Oh! I didn't mean... I wasn't...

174
00:12:18.656 --> 00:12:22.660
(CLEARS THROAT) What?
They're calling me, so I gotta... Bye!

175
00:12:23.953 --> 00:12:25.329
VILLAGER: Ow! Ow! Ow!

176
00:12:25.413 --> 00:12:26.664
You're doing great.

177
00:12:26.831 --> 00:12:28.249
Is it done yet?

178
00:12:28.374 --> 00:12:30.084
(CONTINUES SCREAMING)

179
00:12:30.167 --> 00:12:31.752
So close.

180
00:12:33.170 --> 00:12:34.922
(DRUM BEATS PLAYING)

181
00:12:46.225 --> 00:12:49.562
I'm curious about that chicken
eating the rock.

182
00:12:49.687 --> 00:12:54.650
He seems to lack the basic intelligence
required for pretty much everything.

183
00:12:54.817 --> 00:12:57.736
Should we maybe just cook him?

184
00:12:58.863 --> 00:13:02.116
Sometimes our strengths lie
beneath the surface.

185
00:13:03.659 --> 00:13:05.995
Far beneath in some cases.

186
00:13:06.162 --> 00:13:08.372
But I'm sure there's more to Heihei

187
00:13:08.456 --> 00:13:09.623

- than meets the eye.
- (HEIHEi CAWING)

188
00:13:16.672 --> 00:13:17.756
It's the harvest.

189
00:13:18.132 --> 00:13:21.302
This morning,
I was husking the coconuts and...

190
00:13:28.100 --> 00:13:29.101
Well...

191
00:13:29.226 --> 00:13:34.148
we should clear the diseased trees
and we will start a new grove.

192
00:13:34.231 --> 00:13:35.232
There.

193
00:13:37.776 --> 00:13:39.028
Thanks, Moana.

194
00:13:39.195 --> 00:13:41.197
She's doing great.

195
00:13:45.284 --> 00:13:46.577
This suits you.

196
00:13:46.744 --> 00:13:47.745
FISHERMAN: Chief?

197
00:13:48.412 --> 00:13:50.581
(PANTING)
There's something you need to see.

198
00:13:50.956 --> 00:13:52.583
Our traps in the east lagoon...

199
00:13:53.000 --> 00:13:54.919
they're pulling up less and less fish.

200
00:13:55.419 --> 00:13:57.755
Then we'll rotate the fishing grounds.

201
00:13:58.130 --> 00:14:00.090
Uh, we have. There's no fish.

202
00:14:00.299 --> 00:14:03.427
Oh. Then we'll fish
the far side of the island.

203
00:14:03.594 --> 00:14:04.637
We tried.

204
00:14:04.887 --> 00:14:06.096
The windward side.

205
00:14:06.555 --> 00:14:08.766
And the leeward side, the shallows,
the channel.

206
00:14:09.141 --> 00:14:10.601
We've tried the whole lagoon.

207
00:14:11.060 --> 00:14:13.103
They're just gone.

208
00:14:13.604 --> 00:14:15.397
TUI:
Have you tried using a different bait?

209
00:14:15.564 --> 00:14:16.941
FISHERMAN: I don't think it's the bait.

210
00:14:17.316 --> 00:14:18.609
There's no fish.

211
00:14:18.943 --> 00:14:20.486
It seems like
it's getting worse and worse.

212
00:14:20.611 --> 00:14:23.614
TUI: Of course, I understand
you have reason for concern.

213
00:14:24.532 --> 00:14:25.824
I will talk to the council.
I'm sure we...

214
00:14:25.991 --> 00:14:28.827
What if we fish beyond the reef?

215
00:14:30.287 --> 00:14:32.122
No one goes beyond the reef.

216
00:14:32.289 --> 00:14:34.750
I know. But if there are no fish
in the lagoon...

217
00:14:35.125 --> 00:14:36.835

- Moana.
- And there's a whole ocean.

218
00:14:37.211 --> 00:14:38.629
We have one rule.

219
00:14:38.963 --> 00:14:39.964
An old rule, when there were fish.

220
00:14:40.381 --> 00:14:42.091

- A rule that keeps us safe...
- But Dad, I...

221
00:14:42.216 --> 00:14:46.178
...instead of endangering our people
so you can run right back to the water.

222
00:14:48.639 --> 00:14:49.640
(EXHALES)

223
00:14:50.391 --> 00:14:51.642
(HUFFING)

224
00:14:52.851 --> 00:14:55.354
Every time I think you're past this...

225
00:14:58.023 --> 00:15:00.276
No one goes beyond the reef!

NOTE CHAPTER
title: 7. Story about the father
start: 15:05

226
00:15:06.907 --> 00:15:09.994
Well, it's not like you said it
in front of your dad.

227
00:15:10.661 --> 00:15:12.162
Standing on a boat.

228
00:15:12.913 --> 00:15:17.167
I didn't say go beyond the reef,
because I want to be on the ocean.

229
00:15:17.334 --> 00:15:19.336
But you still do.

230
00:15:19.670 --> 00:15:20.671
(MOANA SIGHS)

231
00:15:20.754 --> 00:15:23.215

- He's hard on you because...
- Because he doesn't get me.

232
00:15:23.382 --> 00:15:25.968
Because he was you.

233
00:15:26.760 --> 00:15:28.637
Drawn to the ocean.

234
00:15:28.804 --> 00:15:30.180
Down by the shore.

235
00:15:31.265 --> 00:15:32.975
He took a canoe, Moana.

236
00:15:33.350 --> 00:15:34.602
He crossed the reef...

237
00:15:35.561 --> 00:15:37.855
and found an unforgiving sea.

238
00:15:38.314 --> 00:15:40.065
Waves like mountains.

239
00:15:41.108 --> 00:15:44.361
His best friend begged
to be on that boat.

240
00:15:44.862 --> 00:15:47.114
Your dad couldn't save him.

241
00:15:49.241 --> 00:15:52.536
He's hoping he can save you.

242
00:15:53.871 --> 00:15:55.372
Sometimes...

243
00:15:55.539 --> 00:15:59.460
who we wish we were,
what we wish we could do...

244
00:16:01.128 --> 00:16:03.255
it's just not meant to be.

NOTE CHAPTER
title: 8. Song: "Who am I"
start: 16:17

245
00:16:17.144 --> 00:16:21.398
I've been staring at the edge of the water

246
00:16:21.565 --> 00:16:24.735
Long as I can remember

247
00:16:25.069 --> 00:16:27.821
Never really knowing why

248
00:16:29.239 --> 00:16:33.577
I wish I could be the perfect daughter

249
00:16:33.744 --> 00:16:36.580
But I come back to the water

250
00:16:36.747 --> 00:16:38.957
No matter how hard I try

251
00:16:40.751 --> 00:16:44.004
Every turn I take
Every trail I track

252
00:16:44.505 --> 00:16:47.049
Every path I make
Every road leads back

253
00:16:47.424 --> 00:16:49.760
To the place I know
Where I cannot go

254
00:16:49.927 --> 00:16:52.346
Where I long to be

255
00:16:52.513 --> 00:16:55.015
See the line where the sky meets the sea

256
00:16:55.391 --> 00:16:57.434
It calls me

257
00:16:57.601 --> 00:17:00.437
And no one knows

258
00:17:00.938 --> 00:17:03.440
How far it goes

259
00:17:03.941 --> 00:17:08.737
If the wind in my sail on the sea
Stays behind me

260
00:17:08.821 --> 00:17:12.449
One day I'll know

261
00:17:12.616 --> 00:17:16.829
If I go, there's just no telling
how far I'll go

262
00:17:17.162 --> 00:17:20.040
I know everybody on this island

263
00:17:20.374 --> 00:17:22.793
Seems so happy on this island

264
00:17:22.960 --> 00:17:25.504
Everything is by design

265
00:17:26.213 --> 00:17:27.256
(SQUEALS)

266
00:17:27.506 --> 00:17:31.009
I know everybody on this island

267
00:17:31.385 --> 00:17:34.221
Has a role on this island

268
00:17:34.596 --> 00:17:36.974
So maybe I can roll with mine

269
00:17:38.308 --> 00:17:41.186
I can lead with pride
I can make us strong

270
00:17:41.520 --> 00:17:43.897
I'll be satisfied
If I play along

271
00:17:44.064 --> 00:17:47.317
But the voice inside
Sings a different song

272
00:17:47.693 --> 00:17:49.361
What is wrong with me

273
00:17:52.531 --> 00:17:55.117
See the light as it shines on the sea

274
00:17:55.284 --> 00:17:57.995
It's blinding

275
00:17:58.328 --> 00:18:00.205
But no one knows

276
00:18:00.622 --> 00:18:03.834
How deep it goes

277
00:18:04.001 --> 00:18:06.086
And it seems like it's calling out to me

278
00:18:06.462 --> 00:18:09.047
So come find me

279
00:18:09.423 --> 00:18:11.759
And let me know

280
00:18:12.468 --> 00:18:15.387
What's beyond that line
Will I cross that line

281
00:18:15.763 --> 00:18:17.598
The line where the sky meets the sea

282
00:18:17.973 --> 00:18:20.517
It calls me

283
00:18:20.684 --> 00:18:23.312
And no one knows

284
00:18:23.479 --> 00:18:26.815
How far it goes

285
00:18:27.149 --> 00:18:31.695
If the wind in my sail on the sea
stays behind me

286
00:18:31.862 --> 00:18:34.531
One day I'll know

287
00:18:34.698 --> 00:18:39.995
How far I'll go

NOTE CHAPTER
title: 9. Moana swam over the reef
start: 18:41

288
00:18:42.706 --> 00:18:43.707
Whoa.

289
00:18:47.753 --> 00:18:48.879
We're okay, Pua.

290
00:18:49.379 --> 00:18:50.589
I can do this.

291
00:18:50.923 --> 00:18:51.924
(EXHALES)

292
00:18:52.216 --> 00:18:54.885
There's more fish beyond the reef.

293
00:18:56.595 --> 00:18:58.806
There's more beyond the reef.

294
00:19:02.768 --> 00:19:04.144
(PUA SQUEALING)

295
00:19:07.189 --> 00:19:08.690
Not so bad.

296
00:19:10.734 --> 00:19:12.236
(GASPS)

297
00:19:16.365 --> 00:19:18.450

- (PUA SQUEALING FRANTICALLY)
- Pua!

NOTE CHAPTER
title: 10. Grandma shows the cave of ships
start: 19:27

298
00:19:28.043 --> 00:19:29.044
(COUGHING)

299
00:19:52.276 --> 00:19:53.569
(GASPING)

300
00:19:58.240 --> 00:19:59.241
(PUA SQUEALING)

301
00:20:07.124 --> 00:20:08.125
(WINCES)

302
00:20:09.960 --> 00:20:12.796
Whatever just happened...

303
00:20:12.963 --> 00:20:14.298
blame it on the pig.

304
00:20:14.631 --> 00:20:15.674
Gramma.

305
00:20:20.470 --> 00:20:22.139
Are you gonna tell Dad?

306
00:20:22.472 --> 00:20:25.726
I'm his mom.
I don't have to tell him anything.

307
00:20:29.438 --> 00:20:30.731
He was right.

308
00:20:31.481 --> 00:20:33.483
About going out there.

309
00:20:35.903 --> 00:20:38.989
It's time to put my stone on the mountain.

310
00:20:41.158 --> 00:20:44.161
Okay. Well, then, head on back.

311
00:20:44.995 --> 00:20:46.663
Put that stone up there.

312
00:20:51.501 --> 00:20:53.295
Why aren't you trying
to talk me out of it?

313
00:20:53.754 --> 00:20:56.131
You said that's what you wanted.

314
00:20:57.090 --> 00:20:58.091
It is.

315
00:20:58.175 --> 00:20:59.509
(GRAMMA HUMMING)

316
00:21:01.845 --> 00:21:03.847
GRAMMA: When I die...

317
00:21:04.306 --> 00:21:07.517
I'm going to come back as one of these.

318
00:21:07.935 --> 00:21:10.812
Or I chose the wrong tattoo.

319
00:21:10.979 --> 00:21:12.648
Why are you acting weird?

320
00:21:13.023 --> 00:21:16.318
I'm the village crazy lady.
That's my job.

321
00:21:16.985 --> 00:21:20.656
If there's something you want to tell me,
just tell me!

322
00:21:21.823 --> 00:21:23.659
Is there something you wanna tell me?

323
00:21:24.117 --> 00:21:27.037
Is there something you want to hear?

324
00:21:31.875 --> 00:21:34.878
You've been told
all our people's stories...

325
00:21:35.712 --> 00:21:37.381
but one.

326
00:21:38.340 --> 00:21:39.841
What is this place?

327
00:21:40.300 --> 00:21:44.471
Do you really think
our ancestors stayed within the reef?

328
00:21:49.059 --> 00:21:50.060
(GASPS)

329
00:21:53.397 --> 00:21:55.399
Ooh!

330
00:21:56.149 --> 00:21:57.818
MOANA: What's in there?

331
00:21:57.985 --> 00:22:02.489
The answer to the question
you keep asking yourself.

332
00:22:02.990 --> 00:22:05.659
Who are you meant to be?

333
00:22:08.912 --> 00:22:10.664
Go inside...

334
00:22:10.831 --> 00:22:12.416
bang the drum...

335
00:22:12.916 --> 00:22:14.876
and find out.

336
00:22:40.736 --> 00:22:41.737
(GASPS)

337
00:22:44.156 --> 00:22:45.157
Whoa.

338
00:22:51.038 --> 00:22:52.039
Oh.

339
00:23:23.570 --> 00:23:24.988
Bang the drum.

NOTE CHAPTER
title: 11. Song of the sailors
start: 23:31

340
00:23:32.829 --> 00:23:34.164
(DRUM BEAT ECHOING)

341
00:23:41.296 --> 00:23:42.297
(GASPS)

342
00:23:50.514 --> 00:23:51.515
(YELPS)

343
00:23:52.516 --> 00:23:54.810
(ETHEREAL VOICES ECHOING)

344
00:24:17.707 --> 00:24:19.376
(SINGING IN FOREIGN LANGUAGE)

345
00:24:56.746 --> 00:24:59.624
We read the wind and the sky

346
00:25:00.000 --> 00:25:01.626
When the sun is high

347
00:25:01.793 --> 00:25:04.588
We sail the length of the seas

348
00:25:05.130 --> 00:25:06.423
On the ocean breeze

349
00:25:06.923 --> 00:25:09.134
At night we name every star

350
00:25:09.467 --> 00:25:11.428
We know where we are

351
00:25:11.845 --> 00:25:15.807
We know who we are
Who we are

352
00:25:18.810 --> 00:25:20.770
We set a course to find

353
00:25:21.188 --> 00:25:25.483
A brand new island everywhere we roam

354
00:25:28.361 --> 00:25:30.238
We keep our island in our mind

355
00:25:30.947 --> 00:25:33.408
And when it's time to find home

356
00:25:33.575 --> 00:25:35.452
We know the way

357
00:25:37.120 --> 00:25:40.457
We are explorers reading every sign

358
00:25:40.832 --> 00:25:45.629
We tell the stories of our elders
In a never-ending chain

359
00:25:52.969 --> 00:25:55.847
We know the way

NOTE CHAPTER
title: 12. Grandma tells how to remove the curse
start: 26:00

360
00:26:01.645 --> 00:26:03.438
We were voyagers.

361
00:26:04.481 --> 00:26:05.690
We were voyagers!

362
00:26:06.149 --> 00:26:09.736
We were voyagers! We were voyagers!

363
00:26:09.903 --> 00:26:11.655
We were voyagers!

364
00:26:13.156 --> 00:26:14.616
Why'd we stop?

365
00:26:15.700 --> 00:26:16.785
Maui.

366
00:26:17.410 --> 00:26:20.997
When he stole from the mother island,
darkness fell.

367
00:26:21.706 --> 00:26:23.500
Te Kā awoke.

368
00:26:24.167 --> 00:26:27.420
Monsters lurked
and boats stopped coming back.

369
00:26:28.171 --> 00:26:31.841
To protect our people,
the ancient chiefs forbid voyaging...

370
00:26:31.925 --> 00:26:35.845
and now we have forgotten who we are.

371
00:26:36.096 --> 00:26:39.933
And the darkness
has continued to spread...

372
00:26:40.433 --> 00:26:42.185
chasing away our fish...

373
00:26:42.560 --> 00:26:44.104
draining the life...

374
00:26:44.521 --> 00:26:47.899
from island after island.

375
00:26:51.278 --> 00:26:53.113
Our island.

376
00:26:53.738 --> 00:26:55.573
But, one day...

377
00:26:55.740 --> 00:26:59.828
someone will journey beyond our reef,
find Maui...

378
00:26:59.995 --> 00:27:02.914
deliver him across the great ocean...

379
00:27:03.832 --> 00:27:07.460
to restore the heart of Te Fiti.

380
00:27:09.129 --> 00:27:12.215
I was there that day.

381
00:27:12.382 --> 00:27:15.218
The ocean chose you.

382
00:27:23.977 --> 00:27:26.104
I thought it was a dream.

383
00:27:30.400 --> 00:27:31.401
(YELPS)

384
00:27:32.152 --> 00:27:33.778
Nope!

385
00:27:34.696 --> 00:27:38.450
Our ancestors believed Maui lies there...

386
00:27:38.616 --> 00:27:40.368
at the bottom of his hook.

387
00:27:40.827 --> 00:27:43.621
Follow it, and you will find him.

388
00:27:43.788 --> 00:27:47.250
But why would it choose me?

389
00:27:47.417 --> 00:27:50.462
I don't even know how to make it past the reef.

390
00:27:51.296 --> 00:27:53.256
But I know who does!

NOTE CHAPTER
title: 13. Village Council
start: 27:54

391
00:27:55.759 --> 00:27:56.760
(SIGHS)

392
00:28:01.556 --> 00:28:02.557
VILLAGER 1: The crops are turning black.

393
00:28:03.516 --> 00:28:04.517
VILLAGER 2: What about the fish?

394
00:28:04.768 --> 00:28:06.353
VILLAGER 3: This is happening all over the island.

395
00:28:06.436 --> 00:28:07.979

- Please, please settle down.
- What are you going to do?

396
00:28:08.063 --> 00:28:09.814
We will dig new fields.
We will find a way to...

397
00:28:09.898 --> 00:28:12.400
We can stop the darkness!
Save our island!

398
00:28:12.776 --> 00:28:14.110
There's a cavern of boats.

399
00:28:14.486 --> 00:28:15.820
Huge canoes.

400
00:28:15.987 --> 00:28:19.574
We can take them, find Maui,
make him restore the heart.

401
00:28:20.033 --> 00:28:23.203
We were voyagers.
We can voyage again!

402
00:28:26.289 --> 00:28:28.041
You told me to help our people.

403
00:28:28.208 --> 00:28:30.460
This is how we help our people.

404
00:28:30.794 --> 00:28:31.878
Dad?

405
00:28:31.961 --> 00:28:32.962
What are you doing?

406
00:28:33.338 --> 00:28:35.632
I should've burned those boats a long time ago!

407
00:28:35.799 --> 00:28:36.841
No! Don't!

408
00:28:37.008 --> 00:28:39.552
We have to find Maui.
We have to restore the heart!

409
00:28:39.969 --> 00:28:41.054
There is no heart!

410
00:28:41.137 --> 00:28:42.889
This is just a rock!

411
00:28:42.972 --> 00:28:43.973
No!

412
00:28:55.443 --> 00:28:56.820
(HORN BLOWING)

413
00:28:57.404 --> 00:28:59.489
Chief! It's your mother!

NOTE CHAPTER
title: 14. Grandmother's last testament
start: 29:08

414
00:29:09.958 --> 00:29:11.167
Mother...

415
00:29:27.267 --> 00:29:28.810
TUI: What can be done?

416
00:29:29.436 --> 00:29:31.688
(VILLAGERS TALKING INDISTINCTLY)

417
00:29:34.941 --> 00:29:36.109
(WEAKLY) Go.

418
00:29:36.526 --> 00:29:37.986
Gramma.

419
00:29:40.697 --> 00:29:41.739
Go.

420
00:29:42.198 --> 00:29:44.701
Not now. I can't.

421
00:29:45.118 --> 00:29:46.202
You must!

422
00:29:46.619 --> 00:29:49.747
The ocean chose you.

423
00:29:50.165 --> 00:29:51.416
Follow the fish hook.

424
00:29:51.583 --> 00:29:52.584
Gramma...

425
00:29:52.750 --> 00:29:54.836
And when you find Maui...

426
00:29:55.295 --> 00:29:58.840
you grab him by the ear. You say...

427
00:29:59.257 --> 00:30:02.260
I am Moana of Motunui.

428
00:30:02.719 --> 00:30:04.846
You will board my boat...

429
00:30:05.305 --> 00:30:07.390
sail across the sea...

430
00:30:07.557 --> 00:30:11.561
and restore the heart of Te Fiti.

431
00:30:13.438 --> 00:30:15.732
(VOICE BREAKING) I can't leave you.

432
00:30:16.191 --> 00:30:21.404
There is nowhere you could go
that I won't be with you.

433
00:30:34.375 --> 00:30:35.752
Go!

NOTE CHAPTER
title: 15. The song "The Ocean is Calling"
start: 30:46

434
00:30:47.639 --> 00:30:50.391
There's a line where the sky meets the sea

435
00:30:50.767 --> 00:30:52.393
And it calls me

436
00:30:53.144 --> 00:30:55.480
But no one knows

437
00:30:55.647 --> 00:30:59.317
How far it goes

438
00:30:59.776 --> 00:31:04.447
All that time wondering where I need
to be is behind me

439
00:31:04.864 --> 00:31:07.575
I'm on my own

440
00:31:08.201 --> 00:31:10.620
To worlds unknown

441
00:31:10.995 --> 00:31:13.831
Every turn I take
Every trail I track

442
00:31:14.165 --> 00:31:15.708
Is a choice I make

443
00:31:15.792 --> 00:31:18.461
Now I can't turn back
from the great unknown

444
00:31:18.836 --> 00:31:22.048
Where I go alone
Where I long to be

445
00:31:31.599 --> 00:31:33.810
See her light up the night in the sea

446
00:31:34.185 --> 00:31:36.646
She calls me

447
00:31:37.021 --> 00:31:39.440
And yes, I know

448
00:31:39.816 --> 00:31:42.068
That I can go

449
00:31:43.736 --> 00:31:47.240
There's a moon in the sky
And the wind is behind me

450
00:31:48.700 --> 00:31:50.785
Soon I'll know

451
00:31:51.202 --> 00:31:53.413
How far I'll go

NOTE CHAPTER
title: 16. Moana is looking for Maui
start: 32:12

452
00:32:13.224 --> 00:32:17.729
I am Moana of Motunui.
You will board my boat...

453
00:32:18.229 --> 00:32:22.275
sail across the sea
and restore the heart of Te Fiti.

454
00:32:22.442 --> 00:32:23.985

- (GRUNTING) I am Moana...
- (THUDDING)

455
00:32:25.445 --> 00:32:26.487

- of Motu...
- (THUDDING CONTINUES)

456
00:32:28.114 --> 00:32:29.240
...nui.

457
00:32:30.867 --> 00:32:31.868
(THUDDING CONTINUES)

458
00:32:40.877 --> 00:32:41.878
Heihei?

459
00:32:54.057 --> 00:32:56.809
(CAWING LOUDLY)

460
00:32:56.893 --> 00:32:58.436
(CAWING STOPS)

461
00:32:59.729 --> 00:33:00.730
(CAWING LOUDLY)

462
00:33:00.855 --> 00:33:01.856
(CAWING STOPS)

463
00:33:01.981 --> 00:33:03.066
(CAWS AND STOPS AGAIN)

464
00:33:04.567 --> 00:33:07.445
It's okay. You're all right.

465
00:33:08.071 --> 00:33:09.238
See?

466
00:33:09.656 --> 00:33:12.450
There we go. Nice water.

467
00:33:12.617 --> 00:33:15.119
The ocean is a friend of mine.

468
00:33:17.330 --> 00:33:18.456
Heihei?

469
00:33:19.749 --> 00:33:20.750
Heihei!

470
00:33:23.711 --> 00:33:24.712
(GASPS)

471
00:33:35.848 --> 00:33:36.849
Stay.

472
00:33:42.855 --> 00:33:45.692
Okay. Next stop, Maui.

473
00:33:53.783 --> 00:33:56.369
I am Moana of Motunui.

474
00:33:56.786 --> 00:33:59.664
You will board my boat...

475
00:34:00.540 --> 00:34:03.668
sail... across the sea...

476
00:34:03.835 --> 00:34:05.962
and restore the heart of Te Fiti.

477
00:34:07.964 --> 00:34:11.134
(MUMBLING) I am Moana of Motu...

478
00:34:12.218 --> 00:34:13.511
Board my boat!

479
00:34:16.472 --> 00:34:17.557
Oh, no.

480
00:34:18.808 --> 00:34:19.976
(GROANING IN FRUSTRATION)

481
00:34:23.855 --> 00:34:25.565
No, no, no!

482
00:34:37.869 --> 00:34:38.995
Ocean...

483
00:34:39.370 --> 00:34:42.081
can I get a little help?

484
00:34:45.543 --> 00:34:46.669
No, no.

485
00:34:48.171 --> 00:34:49.172
Please.

486
00:34:49.464 --> 00:34:50.465
Come on!

487
00:35:01.893 --> 00:35:03.269
Help me!

488
00:35:03.770 --> 00:35:04.771
Please!

NOTE CHAPTER
title: 17. First meeting with Maui
start: 35:09

489
00:35:10.818 --> 00:35:11.819
(SCREAMS)

490
00:35:25.082 --> 00:35:26.083
(CLUCKING)

491
00:35:30.004 --> 00:35:31.005
(CAWS IN ALARM)

492
00:35:42.558 --> 00:35:43.559
Whew!

493
00:35:48.731 --> 00:35:49.774
Um...

494
00:35:49.899 --> 00:35:50.983
What?

495
00:35:51.400 --> 00:35:52.944
I said help me!

496
00:35:53.110 --> 00:35:55.279
And wrecking my boat?

497
00:35:55.738 --> 00:35:57.448
Not helping!

498
00:35:59.116 --> 00:36:02.036
Fish pee in you all day!

499
00:36:02.203 --> 00:36:03.329
So...

500
00:36:04.247 --> 00:36:05.248
(HEIHEI CLUCKING)

501
00:36:17.343 --> 00:36:18.344
Maui?

502
00:36:25.601 --> 00:36:26.853
Maui!

503
00:36:30.147 --> 00:36:32.608
Maui, demigod of the wind and sea...

504
00:36:32.775 --> 00:36:34.485
I am Moana of Motunui.

505
00:36:34.652 --> 00:36:36.195
You will board my boat.

506
00:36:36.362 --> 00:36:38.281
No. You will board my boat.

507
00:36:38.447 --> 00:36:41.200
Yeah. I am Moana of Motunui.

508
00:36:41.617 --> 00:36:44.120
You will board my...

509
00:36:44.287 --> 00:36:46.372
Boat! A boat!

510
00:36:46.455 --> 00:36:49.208
The gods have given me a...

511
00:36:49.292 --> 00:36:50.293
(SCREAMING)

512
00:36:59.093 --> 00:37:00.094
(MOANA CLEARS THROAT)

513
00:37:03.556 --> 00:37:05.141
Maui, shapeshifter...

514
00:37:05.641 --> 00:37:07.435
demigod of the wind and sea...

515
00:37:07.852 --> 00:37:09.604

- I am Moana of...
- Hero of men.

516
00:37:09.687 --> 00:37:11.188
What?

517
00:37:11.272 --> 00:37:13.816
It's actually, Maui, shapeshifter,
demigod of the wind and sea...

518
00:37:13.983 --> 00:37:15.151
hero of men.

519
00:37:15.318 --> 00:37:18.237
I interrupted.
From the top. Hero of men. Go.

520
00:37:20.197 --> 00:37:21.198
I am...

521
00:37:21.365 --> 00:37:22.533
Sorry, sorry, sorry.

522
00:37:22.909 --> 00:37:24.994
And women. Men and women.

523
00:37:25.161 --> 00:37:26.162
Both. All.

524
00:37:26.412 --> 00:37:27.914
Not a guy, girl thing.

525
00:37:28.080 --> 00:37:29.832
You know, Maui is a hero to all.

526
00:37:29.999 --> 00:37:31.167
You're doing great.
(CLICKS TONGUE)

527
00:37:31.500 --> 00:37:33.044
What? No! I'm here to...

528
00:37:33.210 --> 00:37:34.587
Of course.

529
00:37:34.754 --> 00:37:35.922
Yes, yes, yes.

530
00:37:36.422 --> 00:37:38.883
Maui always has time for his fans.

531
00:37:40.176 --> 00:37:41.427
When you use a bird to write with...

532
00:37:42.845 --> 00:37:44.347
it's called tweeting.

533
00:37:48.100 --> 00:37:50.853
(CHUCKLES) I know, not every day
you get a chance to meet your hero.

534
00:37:52.063 --> 00:37:53.856
You are not my hero.

535
00:37:54.023 --> 00:37:56.567
And I'm not here
so you can sign my oar!

536
00:37:56.734 --> 00:37:59.362
I'm here 'cause
you stole the heart of Te Fiti!

537
00:37:59.528 --> 00:38:01.572
And you will board my boat...

538
00:38:01.739 --> 00:38:04.909
and sail across the sea and put it back!

539
00:38:04.992 --> 00:38:06.118
Um...

540
00:38:06.202 --> 00:38:08.955
Yeah, it almost sounded
like you don't like me...

541
00:38:09.121 --> 00:38:11.040
which is impossible because...

542
00:38:11.207 --> 00:38:13.000
I got stuck here for 1,000 years...

543
00:38:13.167 --> 00:38:15.419
trying to get the heart
as a gift for you mortals.

544
00:38:15.586 --> 00:38:18.881
So you could have the power
to create life itself.

545
00:38:19.048 --> 00:38:22.426
Yeah. So, what I believe
you were trying to say...

546
00:38:22.593 --> 00:38:23.594
is "thank you."

547
00:38:23.761 --> 00:38:25.221

- "Thank you?"
- You're welcome.

548
00:38:25.388 --> 00:38:26.389
What? No, no, no!

549
00:38:26.555 --> 00:38:27.890
I didn't... I wasn't...

550
00:38:28.057 --> 00:38:29.100
Why would I ever say that?

551
00:38:29.266 --> 00:38:30.476
Okay, okay.

NOTE CHAPTER
title: 18. Song of Maui
start: 38:30

552
00:38:31.060 --> 00:38:34.438
I see what's happening Yeah

553
00:38:34.605 --> 00:38:37.566
You're face to face with greatness and it's strange

554
00:38:37.733 --> 00:38:39.318
You don't even know how you feel

555
00:38:39.610 --> 00:38:41.112
It's adorable

556
00:38:41.404 --> 00:38:44.156
Well it's nice to see that humans never change

557
00:38:44.323 --> 00:38:47.576
Open your eyes Let's begin

558
00:38:47.743 --> 00:38:48.786
Yes, it's really me

559
00:38:48.953 --> 00:38:50.913
It's Maui Breathe it in

560
00:38:51.122 --> 00:38:52.748
I know it's a lot

561
00:38:52.915 --> 00:38:54.834
The hair The bod

562
00:38:55.418 --> 00:38:57.753
When you're staring at a demigod

563
00:38:58.421 --> 00:39:00.589
What can I say except

564
00:39:00.756 --> 00:39:01.757
You're welcome

565
00:39:02.591 --> 00:39:05.261
For the tides, the sun, the sky

566
00:39:05.678 --> 00:39:07.763
Hey, it's okay, it's okay

567
00:39:07.930 --> 00:39:09.598
You're welcome

568
00:39:09.765 --> 00:39:12.643
I'm just an ordinary demiguy Hey!

569
00:39:12.810 --> 00:39:15.938
What has two thumbs and pulled up the sky

570
00:39:16.105 --> 00:39:17.940
When you were waddling yay high?

571
00:39:18.107 --> 00:39:19.233
This guy

572
00:39:19.400 --> 00:39:23.738
When the nights got cold
Who stole you fire from down below?

573
00:39:24.238 --> 00:39:26.115
You're looking at him yo

574
00:39:26.282 --> 00:39:29.952
Oh also I lassoed the sun

575
00:39:30.411 --> 00:39:31.412
You're welcome

576
00:39:31.620 --> 00:39:33.956
To stretch your days and bring you fun

577
00:39:34.123 --> 00:39:36.917
Also I harnessed the breeze

578
00:39:37.334 --> 00:39:38.335
You're welcome

579
00:39:38.502 --> 00:39:40.796
To fill your sails and shake your trees

580
00:39:41.255 --> 00:39:44.925
So what can I say except
You're welcome

581
00:39:45.092 --> 00:39:47.553
For the islands I pulled from the sea

582
00:39:48.137 --> 00:39:50.347
There's no need to pray
It's okay

583
00:39:50.514 --> 00:39:51.849
You're welcome

584
00:39:51.974 --> 00:39:55.811
Ha, I guess it's just my way of being me

585
00:39:55.978 --> 00:39:56.979
You're welcome

586
00:39:57.646 --> 00:39:59.273
You're welcome

587
00:39:59.815 --> 00:40:00.983
Well come to think of it

588
00:40:01.650 --> 00:40:03.235
Kid, honestly I could go on and on

589
00:40:03.652 --> 00:40:05.071
I could explain every natural phenomenon

590
00:40:05.488 --> 00:40:08.491
The tide, the grass, the ground
Oh that was Maui just messing around

591
00:40:08.949 --> 00:40:10.493
I killed an eel
I buried its guts

592
00:40:10.659 --> 00:40:11.994
Sprouted a tree
Now you got coconuts

593
00:40:12.495 --> 00:40:13.954
What's the lesson?
What is the take away?

594
00:40:14.205 --> 00:40:15.706
Don't mess with Maui
when he's on a breakaway

595
00:40:16.165 --> 00:40:19.043
And the tapestry here on my skin
Is a map of the victories I win

596
00:40:19.502 --> 00:40:21.003
Look where I've been
I make everything happen

597
00:40:21.378 --> 00:40:23.464
Look at that
Mean Mini-Maui just tickety tappin'

598
00:40:23.631 --> 00:40:25.174
Ha ha Ha ha

599
00:40:25.341 --> 00:40:27.218
Ha ha
Hey

600
00:40:27.384 --> 00:40:30.346
Well anyway let me say
You're welcome

601
00:40:30.513 --> 00:40:31.680
You're welcome

602
00:40:31.847 --> 00:40:34.475
For the wonderful world you know

603
00:40:34.642 --> 00:40:37.520
Hey, it's okay, it's okay
You're welcome

604
00:40:37.686 --> 00:40:38.729
You're welcome

605
00:40:39.063 --> 00:40:41.524
Well come to think of it
I gotta go

606
00:40:41.690 --> 00:40:44.568
Hey it's your day to say
You're welcome

607
00:40:44.735 --> 00:40:45.861
You're welcome

608
00:40:46.028 --> 00:40:48.531
'Cause I'm gonna need that boat

609
00:40:48.948 --> 00:40:51.784
I'm sailing away away
You're welcome

610
00:40:51.867 --> 00:40:52.910
You're welcome

611
00:40:53.244 --> 00:40:55.329
'Cause Maui can do everything but float

612
00:40:55.496 --> 00:40:57.373

- You're welcome
- You're welcome

613
00:40:57.540 --> 00:40:59.708

- You're welcome
- You're welcome

614
00:40:59.875 --> 00:41:00.876
Huh?

NOTE CHAPTER
title: 19. Maui steals a boat
start: 41:00

615
00:41:01.210 --> 00:41:02.211
And thank you!

616
00:41:03.129 --> 00:41:04.130
Hey!

617
00:41:04.421 --> 00:41:07.716
Let me out! You lying, slimy son of a...

618
00:41:08.050 --> 00:41:09.468
(HUMMING)

619
00:41:09.552 --> 00:41:11.387
You're welcome

620
00:41:13.222 --> 00:41:14.515
You're so welcome.

621
00:41:20.104 --> 00:41:22.356
No. I'm not going to Te Fiti
with some kid.

622
00:41:22.439 --> 00:41:23.440
I'm going to get my hook.

623
00:41:23.899 --> 00:41:25.734
You have yours and
I'm not Maui without mine.

624
00:41:27.903 --> 00:41:29.113
Okay, talk to the back.

625
00:41:34.910 --> 00:41:36.078
Boat snack.

626
00:41:37.288 --> 00:41:38.289
(SCREAMING)

627
00:42:02.062 --> 00:42:05.733
Good riddance,
you filthy pile of pebbles.

628
00:42:06.233 --> 00:42:08.569
Oh, no, no, no.
Don't look at me like that.

629
00:42:08.736 --> 00:42:11.280
It's a beautiful cave.
She's gonna love it.

630
00:42:11.864 --> 00:42:15.034
And I'm going to love you in ma belly.

631
00:42:15.576 --> 00:42:17.620
Now, let's fatten you up, drumstick.

632
00:42:40.809 --> 00:42:43.145
I could watch that all day.

633
00:42:43.270 --> 00:42:44.980
Okay. Enjoy the island.

634
00:42:45.314 --> 00:42:46.482
Maui, out.

635
00:42:46.649 --> 00:42:48.067
No! Stop!

636
00:42:48.234 --> 00:42:50.152
Hey! You have to put back the heart!

637
00:43:05.709 --> 00:43:06.752
(CLUCKS)

638
00:43:06.835 --> 00:43:08.420
Did not see that coming.

639
00:43:10.506 --> 00:43:13.592
I am Moana of Motunui.

640
00:43:13.759 --> 00:43:15.094
This is my canoe...

641
00:43:15.261 --> 00:43:16.845
and you will journey to...

642
00:43:20.099 --> 00:43:21.725
All right, get over it. We gotta move.

643
00:43:23.852 --> 00:43:24.937
And she's back.

644
00:43:25.271 --> 00:43:27.648
I am Moana of Motunui...

645
00:43:32.695 --> 00:43:33.988
it was Moana, right?

646
00:43:34.071 --> 00:43:35.197
Yes.

647
00:43:35.656 --> 00:43:37.866
And you will restore the heart!

648
00:43:49.211 --> 00:43:50.379
All right. I'm out.

649
00:43:55.676 --> 00:43:56.885
Oh, come on!

650
00:43:57.970 --> 00:43:59.555
What is your problem?

651
00:44:01.307 --> 00:44:03.058
Are you afraid of it?

652
00:44:03.350 --> 00:44:04.727
No! No.

653
00:44:04.810 --> 00:44:06.270
(CHUCKLES NERVOUSLY)
I'm not afraid.

654
00:44:10.065 --> 00:44:12.234
Stay out of it
or you're sleeping in my armpit.

655
00:44:12.401 --> 00:44:13.402
You, stop it.

656
00:44:13.569 --> 00:44:16.238
That is not a heart. it is a curse.

657
00:44:16.405 --> 00:44:18.532
The second I took it, I got blasted outta the sky...

658
00:44:18.699 --> 00:44:19.867
and I lost my hook.

659
00:44:20.034 --> 00:44:21.201
Get it away from me.

660
00:44:21.660 --> 00:44:23.037
Get this away?

661
00:44:23.370 --> 00:44:25.164
Hey, hey, hey! I'm a demigod, okay?

662
00:44:25.331 --> 00:44:26.999
Stop that. I will smite you!

663
00:44:27.166 --> 00:44:28.834
You wanna get smote?

664
00:44:29.001 --> 00:44:30.002
Smotten?

665
00:44:31.211 --> 00:44:33.672
Listen, that thing doesn't give you
power to create life...

666
00:44:33.839 --> 00:44:35.549
it's a homing beacon of death.

667
00:44:35.716 --> 00:44:38.010
If you don't put it away,
bad things are gonna come for it.

668
00:44:38.427 --> 00:44:40.179
Come for this? The heart?

669
00:44:40.429 --> 00:44:41.388
You mean this heart right here?

670
00:44:41.472 --> 00:44:42.473
Don't, you can't
raise your voice like that!

671
00:44:42.598 --> 00:44:44.058

- Come and get it!
- (MAUI SHUSHING)

672
00:44:44.224 --> 00:44:45.434
You are gonna get us killed!

673
00:44:45.934 --> 00:44:49.104
No, I'm gonna get us to Te Fiti,
so you can put it back.

674
00:44:49.271 --> 00:44:50.272
Thank you.

675
00:44:50.439 --> 00:44:51.607
You're welcome.

NOTE CHAPTER
title: 20. Meeting with the Kakamors
start: 44:55

676
00:44:56.528 --> 00:44:57.613
Kakamora.

677
00:44:57.780 --> 00:44:59.031
Kaka-what?

678
00:44:59.198 --> 00:45:00.616
Murdering little pirates.

679
00:45:01.575 --> 00:45:04.203
Wonder what they're here for.

680
00:45:08.707 --> 00:45:10.918
They're kinda cute.

681
00:45:28.685 --> 00:45:29.686
Ocean!

682
00:45:29.853 --> 00:45:31.647
Do something! Help us!

683
00:45:31.980 --> 00:45:34.233
The ocean doesn't help you,
you help yourself!

684
00:45:34.400 --> 00:45:35.901
Tighten the halyard. Bind the stays!

685
00:45:37.778 --> 00:45:39.071
You can't sail?

686
00:45:39.321 --> 00:45:40.614
I, uh...

687
00:45:40.697 --> 00:45:42.324
I am self-taught.

688
00:45:53.710 --> 00:45:55.838
Can't you shapeshift or something?

689
00:45:56.004 --> 00:45:57.047
Do you see my hook?

690
00:45:57.214 --> 00:45:58.799
No magic hook, no magic powers!

691
00:46:24.533 --> 00:46:26.577
Their boat is turning into more boats!

692
00:46:29.580 --> 00:46:30.706
(HORN BLOWING)

693
00:46:46.180 --> 00:46:48.682
Yep, I just did that.

694
00:46:54.354 --> 00:46:55.522
MOANA: No, no!

695
00:46:56.857 --> 00:46:58.609
Heihei!

696
00:47:11.830 --> 00:47:13.040
Maui!

697
00:47:13.207 --> 00:47:14.208
They took the heart!

698
00:47:16.668 --> 00:47:17.753
That's a chicken.

699
00:47:17.920 --> 00:47:19.922
The heart is in the...
(FRUSTRATED GRUNTING)

700
00:47:20.005 --> 00:47:21.006
We have to get him back!

701
00:47:26.553 --> 00:47:27.554
Maui!

702
00:47:28.514 --> 00:47:30.140
Cheeeehoooo!

703
00:47:42.194 --> 00:47:43.862
There! Right there!

704
00:47:44.029 --> 00:47:45.030
You're turning?

705
00:47:45.197 --> 00:47:46.323
What are you doing?

706
00:47:46.490 --> 00:47:47.616
Escaping!

707
00:47:47.908 --> 00:47:48.951
The heart!

708
00:47:49.284 --> 00:47:50.911
Forget it! You'll never get it back!

709
00:47:51.078 --> 00:47:53.080
Besides, you got a better one.

710
00:47:53.163 --> 00:47:54.164
Hey!

711
00:47:54.248 --> 00:47:55.249
What am I gonna steer with?

712
00:47:56.542 --> 00:47:58.126
They're just gonna kill ya!

713
00:48:02.464 --> 00:48:03.549
Coconuts.

714
00:48:46.425 --> 00:48:47.634
Got it!

715
00:48:51.388 --> 00:48:52.389
Hey!

NOTE CHAPTER
title: 21. Moana and Maui agreed
start: 49:07

716
00:49:08.405 --> 00:49:09.406
MOANA: Yeah!

717
00:49:10.490 --> 00:49:11.491
We did it!

718
00:49:13.035 --> 00:49:14.995
Congratulations on not being dead, girlie.

719
00:49:15.287 --> 00:49:16.538
You surprise me.

720
00:49:16.955 --> 00:49:18.915
But I'm still not taking that thing back.

721
00:49:20.584 --> 00:49:23.462
You wanna get to Te Fiti you gotta
go through a whole ocean of bad.

722
00:49:23.754 --> 00:49:24.963
Not to mention Te Kā.

723
00:49:26.506 --> 00:49:27.883
Lava monster?

724
00:49:28.342 --> 00:49:30.052
Ever defeat a lava monster?

725
00:49:30.719 --> 00:49:32.929
No. Have you?

726
00:49:40.437 --> 00:49:43.649
I'm not going on a suicide mission
with some mortal.

727
00:49:44.399 --> 00:49:47.027
You can't restore the heart without me...

728
00:49:47.194 --> 00:49:48.945
and me says no.

729
00:49:49.780 --> 00:49:51.406
I'm getting my hook.

730
00:49:52.407 --> 00:49:53.408
End of discussion.

731
00:50:00.332 --> 00:50:02.417
You'd be a hero.

732
00:50:04.711 --> 00:50:06.797
That's what you're all about, right?

733
00:50:06.963 --> 00:50:09.800
Little girl, I am a hero.

734
00:50:09.966 --> 00:50:11.426
Maybe you were.

735
00:50:11.593 --> 00:50:12.719
But now...

736
00:50:12.886 --> 00:50:15.806
now you're just the guy
who stole the heart of Te Fiti.

737
00:50:15.972 --> 00:50:18.266
The guy who cursed the world.

738
00:50:19.685 --> 00:50:21.019
You're no one's hero.

739
00:50:21.103 --> 00:50:22.354
(SCOFFS) No one?

740
00:50:32.030 --> 00:50:33.031
But...

741
00:50:33.657 --> 00:50:35.200
put this back...

742
00:50:35.367 --> 00:50:37.119
save the world...

743
00:50:37.369 --> 00:50:39.287
you'd be everyone's hero.

744
00:50:44.000 --> 00:50:47.129
Maui! Maui! Maui!

745
00:50:47.796 --> 00:50:49.464
You're so amazing!

746
00:50:50.048 --> 00:50:52.759
We'd never make it without my hook.
Not past Te Kā.

747
00:50:52.926 --> 00:50:54.010
Then we get your hook.

748
00:50:54.344 --> 00:50:57.889
We get your hook, take out Te Kā,
restore the heart.

749
00:50:58.056 --> 00:51:00.684
Unless you don't wanna be...

750
00:51:00.851 --> 00:51:03.979
Maui, demigod of the wind and sea.

751
00:51:04.146 --> 00:51:05.647
Hero to...

752
00:51:06.064 --> 00:51:07.232
all.

753
00:51:10.902 --> 00:51:12.487
First, we get my hook.

754
00:51:12.863 --> 00:51:14.239
Then save the world.

755
00:51:14.322 --> 00:51:15.323
Deal?

756
00:51:15.449 --> 00:51:16.450
Deal.

757
00:51:20.829 --> 00:51:21.872
Worth a shot.

758
00:51:23.039 --> 00:51:24.708
Okay, we go east.

759
00:51:25.876 --> 00:51:27.043
To the lair of Tamatoa.

760
00:51:29.087 --> 00:51:32.674
If anyone has my hook,
it's that beady-eyed bottom-feeder.

761
00:51:45.187 --> 00:51:46.563
Teach me to sail.

762
00:51:48.940 --> 00:51:52.235
My job is to deliver Maui
across the great ocean.

763
00:51:52.402 --> 00:51:53.403
I should...

764
00:51:54.780 --> 00:51:56.698
I should be sailing.

765
00:51:57.032 --> 00:51:58.867
It's called wayfinding, princess.

766
00:51:59.534 --> 00:52:01.411
And it's not just sails and knots...

767
00:52:01.745 --> 00:52:04.206
it's seeing where you're going in your mind.

768
00:52:04.539 --> 00:52:06.416
Knowing where you are...

769
00:52:06.750 --> 00:52:08.168
by knowing where you've been.

770
00:52:08.335 --> 00:52:10.670
Okay, first, I'm not a princess.

771
00:52:11.213 --> 00:52:12.297
I am the daughter of the chief.

772
00:52:12.464 --> 00:52:13.632

- Same difference.
- No.

773
00:52:13.799 --> 00:52:16.426
If you wear a dress,
and you have an animal sidekick...

774
00:52:16.593 --> 00:52:17.719
you're a princess.

775
00:52:18.011 --> 00:52:19.095
You are not a wayfinder.

776
00:52:19.554 --> 00:52:22.682
You will never be a wayfinder,
you will never be a...

777
00:52:28.021 --> 00:52:30.315
Really? Blow dart in my butt cheek?

778
00:52:35.695 --> 00:52:38.323
You are a bad person.

779
00:52:38.698 --> 00:52:40.242
If you can talk, you can teach.

780
00:52:40.408 --> 00:52:41.409
Wayfinding.

781
00:52:42.661 --> 00:52:44.412
Lesson one. Hit it.

782
00:52:45.789 --> 00:52:46.790
(GROANS)

783
00:52:47.040 --> 00:52:48.250
Pull the sheet.

784
00:52:49.000 --> 00:52:50.627
Not the sheet.

785
00:52:50.794 --> 00:52:51.795
No.

786
00:52:51.878 --> 00:52:52.879
Nope.

787
00:52:53.046 --> 00:52:55.006
Nope. No.

788
00:52:56.049 --> 00:52:57.759
Tried that one already.

789
00:53:01.137 --> 00:53:04.933
You're measuring the stars,
not giving the sky a high-five.

790
00:53:06.309 --> 00:53:09.187
If the current's warm,
you're going the right way.

791
00:53:11.106 --> 00:53:12.607
It's cold.

792
00:53:12.774 --> 00:53:15.402
Wait, it's getting warmer. (GASPS)

793
00:53:15.569 --> 00:53:19.531
Aah! That is disgusting!
What is wrong with you?

NOTE CHAPTER
title: 22. Moana's Nightmare
start: 53:18

794
00:53:19.614 --> 00:53:20.615
(MAUI CHUCKLES)

795
00:53:27.497 --> 00:53:28.498
(GROANS)

796
00:53:36.172 --> 00:53:37.465
We're here?

797
00:53:38.300 --> 00:53:40.677
See, told you I could do it!

798
00:53:49.060 --> 00:53:50.395
Motunui?

799
00:53:51.605 --> 00:53:53.189
I'm home?

800
00:53:56.818 --> 00:53:58.528

- TUI: Moana!
- Dad?

801
00:53:59.321 --> 00:54:00.989
SINA: Moana!

802
00:54:01.239 --> 00:54:02.324
Mom?

803
00:54:03.700 --> 00:54:04.868
Help!

804
00:54:06.745 --> 00:54:07.746
No!

805
00:54:08.288 --> 00:54:09.414
Moana!

NOTE CHAPTER
title: 23. Tamatoa Island
start: 54:08

806
00:54:09.831 --> 00:54:10.832
(GASPS)

807
00:54:12.250 --> 00:54:14.002
MAUI: Enjoy your beauty rest?

808
00:54:14.294 --> 00:54:16.838
You know,
a real wayfinder never sleeps...

809
00:54:17.005 --> 00:54:19.633
so they actually get
where they need to go.

810
00:54:20.300 --> 00:54:21.676
Muscle up, buttercup.

811
00:54:22.302 --> 00:54:23.803
We're here.

812
00:54:25.305 --> 00:54:27.474
You're sure this guy's gonna have your hook?

813
00:54:27.933 --> 00:54:29.893
Tamatoa? Oh, he'll have it.

814
00:54:30.310 --> 00:54:34.064
He's a scavenger. Collects stuff.
Thinks it makes him look cool.

815
00:54:34.147 --> 00:54:35.148
Ah!

816
00:54:35.941 --> 00:54:37.776
And for Tamatoa, trust me...

817
00:54:37.943 --> 00:54:40.487
my hook is the coolest collectible.

818
00:54:40.862 --> 00:54:42.572
And he lives up there?

819
00:54:45.575 --> 00:54:46.576
No,no,no.

820
00:54:46.743 --> 00:54:48.161
That's just the entrance...

821
00:54:48.328 --> 00:54:50.538
to Lalotai.

822
00:54:50.872 --> 00:54:51.957
(GASPS) Lalotai?

823
00:54:52.123 --> 00:54:53.875
Realm of monsters?

824
00:54:54.501 --> 00:54:56.419
We're going to the realm of monsters?

825
00:54:56.836 --> 00:54:59.047
We? No. Me.

826
00:54:59.506 --> 00:55:02.634
You are gonna stay here
with the other chicken. (CLUCKING)

827
00:55:04.427 --> 00:55:06.137
That's what I'm talking about. Gimme some.

828
00:55:07.472 --> 00:55:09.683
Come on. That was a good one.
How do you not get it?

829
00:55:09.849 --> 00:55:12.060
I called her a chicken,
there's a chicken on the boat.

830
00:55:12.352 --> 00:55:13.895
I know she's human,
but that's not the...

831
00:55:14.062 --> 00:55:15.605
You know what? Forget it. Forget it!

832
00:55:15.772 --> 00:55:17.232
I'm not explaining it to you.

833
00:55:17.399 --> 00:55:19.025
Cause then it's not funny.

834
00:55:21.403 --> 00:55:22.570
(GRUNTING)

835
00:55:27.617 --> 00:55:28.702
(MOANA GRUNTING)

836
00:55:30.245 --> 00:55:31.246
(GROANS)

837
00:55:32.789 --> 00:55:34.874
So, daughter of the chief...

838
00:55:35.041 --> 00:55:36.501
I thought you stayed in the village.

839
00:55:36.668 --> 00:55:38.378
You know, kissing babies and things.

840
00:55:39.379 --> 00:55:41.297
Hey, I'm just trying to understand...

841
00:55:41.464 --> 00:55:43.883
why your people decided to send...

842
00:55:44.050 --> 00:55:46.136
How do I phrase this? You.

843
00:55:46.302 --> 00:55:49.556
My people didn't send me.

844
00:55:49.723 --> 00:55:50.890
The ocean did.

845
00:55:51.057 --> 00:55:52.267
The ocean?

846
00:55:52.434 --> 00:55:53.435
Makes sense.

847
00:55:53.518 --> 00:55:55.186
You're what, eight? Can't sail.

848
00:55:55.353 --> 00:55:56.563
Obvious choice.

849
00:55:56.730 --> 00:56:00.108
It chose me for a reason.

850
00:56:00.275 --> 00:56:01.860
If the ocean's so smart...

851
00:56:02.027 --> 00:56:05.113
why didn't it just take the heart
back to Te Fiti itself?

852
00:56:05.280 --> 00:56:07.032
Or bring me my hook?

853
00:56:07.198 --> 00:56:09.451
The ocean's straight up kooky-dooks.

854
00:56:10.577 --> 00:56:12.328
But I'm sure it's not wrong about you.

855
00:56:13.121 --> 00:56:15.415
You're the Chosen One!

856
00:56:31.014 --> 00:56:34.392
The ocean chose you for a reason.

857
00:56:34.559 --> 00:56:37.145
If you start singing,
I'm gonna throw up.

858
00:56:37.896 --> 00:56:39.981
So, not seeing an entrance.

859
00:56:40.440 --> 00:56:42.317
Yes, because it only appears...

860
00:56:42.484 --> 00:56:44.319
after a human sacrifice.

861
00:56:46.362 --> 00:56:47.697
Kidding. (LAUGHS)

862
00:56:47.864 --> 00:56:49.115
So serious.

863
00:56:52.202 --> 00:56:53.203
(COUGHING)

864
00:56:58.833 --> 00:57:00.126
(SHOUTING IN FOREIGN LANGUAGE)

865
00:57:12.847 --> 00:57:13.848
Don't worry...

866
00:57:14.099 --> 00:57:16.184
it's a lot farther down than it looks.

867
00:57:16.351 --> 00:57:17.352
Cheeeehoooo!

NOTE CHAPTER
title: 24. Lalatai Monster World
start: 57:21

868
00:57:22.690 --> 00:57:25.568
I am still falling!

869
00:57:25.944 --> 00:57:26.945
(WATER SPLASHES)

870
00:57:27.695 --> 00:57:28.863
You can do this.

871
00:57:29.572 --> 00:57:30.698
Go!

872
00:57:51.678 --> 00:57:54.430
And he sticks the landing.

873
00:57:54.722 --> 00:57:55.723
Huh?

874
00:57:56.891 --> 00:57:59.102
What? Dum-dum, she's not even here.

875
00:57:59.269 --> 00:58:01.604
No mortal's gonna jump
into the realm of...

876
00:58:01.771 --> 00:58:02.814
Huh?

877
00:58:07.068 --> 00:58:08.987
Well, she's dead.

878
00:58:09.821 --> 00:58:11.656
Okay, let's get my hook.

879
00:58:22.584 --> 00:58:23.918
Ew! Ew, ew, ew, ew.

880
00:58:25.920 --> 00:58:26.921
(PANTING)

881
00:58:28.256 --> 00:58:29.257
(SCREECHING)

882
00:58:41.936 --> 00:58:44.105
(CREATURE GROWLING)

883
00:59:12.717 --> 00:59:14.802
Maui's fishhook!

884
00:59:14.969 --> 00:59:16.346
Yeah! (GROANS)

885
00:59:16.679 --> 00:59:18.223
(GASPS) Sorry!

886
00:59:18.389 --> 00:59:19.390
I thought you were a monster...

887
00:59:19.557 --> 00:59:20.808
But I found your hook.

888
00:59:20.975 --> 00:59:23.102
And, you're right, this Tamatoa guy
really likes his treasure.

889
00:59:23.269 --> 00:59:24.270
Stay.

890
00:59:24.437 --> 00:59:26.648
What? No. I'm the one who found...

891
00:59:26.856 --> 00:59:28.316
Listen. For a thousand years...

892
00:59:28.483 --> 00:59:30.693
I've only been thinking of
keeping this hair silky...

893
00:59:30.860 --> 00:59:31.903
getting my hook...

894
00:59:32.070 --> 00:59:33.655
and being awesome again.

895
00:59:33.821 --> 00:59:36.199
And it's not getting screwed up
by a mortal...

896
00:59:36.366 --> 00:59:40.078
who has no business
inside of a monster cave, except...

897
00:59:41.746 --> 00:59:43.331
Except...

898
00:59:43.498 --> 00:59:44.707
maybe as bait.

899
00:59:44.874 --> 00:59:46.084
Huh?

900
00:59:46.668 --> 00:59:47.835
Wow!

901
00:59:48.002 --> 00:59:50.046
The shiny, glittery cave.

902
00:59:50.213 --> 00:59:51.547
And just like me...

903
00:59:51.714 --> 00:59:54.342
it is covered in sparkly treasure.

904
00:59:54.509 --> 00:59:56.386
Sparkle, sparkle, sparkle.

905
00:59:56.552 --> 00:59:58.012
You're not selling it!

906
00:59:58.179 --> 01:00:00.098
This is stupid!
I'm just gonna walk up and get it!

907
01:00:00.265 --> 01:00:02.725
You go up there, he will kill you.
Just stick to the plan.

908
01:00:04.936 --> 01:00:07.230
Oh, when he shows up, keep him distracted.

909
01:00:07.397 --> 01:00:08.898
Make him talk about himself.

910
01:00:09.065 --> 01:00:11.192
He loves bragging about
how great he is.

911
01:00:11.359 --> 01:00:12.860
You two must get along swell.

912
01:00:13.278 --> 01:00:15.029
No, not since I ripped off his leg.

913
01:00:15.697 --> 01:00:17.365
You ripped off his...

914
01:00:17.532 --> 01:00:18.533
Maui?

915
01:00:26.708 --> 01:00:28.126
(LAUGHING)

916
01:00:28.209 --> 01:00:29.544
What have we here?

917
01:00:30.461 --> 01:00:34.257
It's a sparkly, shiny... Wait a minute.

918
01:00:34.465 --> 01:00:35.466
(YELPS)

919
01:00:35.633 --> 01:00:37.552
Ugh! It's a human!

920
01:00:37.719 --> 01:00:41.389
What are you doing down here, in the realm of the...

921
01:00:41.556 --> 01:00:42.974
Just pick an eye, babe.

922
01:00:43.141 --> 01:00:44.767
I can't concentrate
on what I'm saying if you keep...

923
01:00:45.310 --> 01:00:47.228
Yeah, pick one, pick one!

924
01:00:47.729 --> 01:00:49.731
You're a funny-looking little thing, aren't you?

925
01:00:49.897 --> 01:00:51.316
Don't! That's my gramma's!

926
01:00:51.482 --> 01:00:52.567
That's my gramma's!

927
01:00:52.734 --> 01:00:53.818
I ate my gramma!

928
01:00:53.985 --> 01:00:56.446
And it took a week,
cause she was absolutely humongous.

929
01:00:56.612 --> 01:00:58.239
Why are you here?

930
01:00:59.449 --> 01:01:00.908
Cause you're amazing!

931
01:01:01.075 --> 01:01:06.414
And we mortals have heard of the tale
of the crab who became a legend!

932
01:01:06.581 --> 01:01:09.125
And I just had to know...

933
01:01:09.292 --> 01:01:11.836
how you became so...

934
01:01:12.170 --> 01:01:14.464
crabulous?

935
01:01:15.256 --> 01:01:19.093
Are you just trying to get me
to talk about myself?

936
01:01:20.428 --> 01:01:22.138
Because if you are...

937
01:01:22.305 --> 01:01:24.349
I will gladly do so.

938
01:01:24.432 --> 01:01:25.433
Huh?

939
01:01:25.516 --> 01:01:26.934
In song form!

NOTE CHAPTER
title: 25. Song of Tamatoa
start: 01:01:28

940
01:01:29.270 --> 01:01:32.774
Well, Tamatoa hasn't always been this glam

941
01:01:32.940 --> 01:01:35.276
I was a drab little crab once

942
01:01:36.652 --> 01:01:39.364
Now I know I can be happy as a clam

943
01:01:39.530 --> 01:01:41.783
Because I'm beautiful, baby

944
01:01:42.950 --> 01:01:44.118
And did your granny say

945
01:01:44.285 --> 01:01:45.995
Listen to your heart

946
01:01:46.162 --> 01:01:48.956
Be who you are on the inside

947
01:01:49.123 --> 01:01:52.460
I need three words
To tear her argument apart

948
01:01:52.627 --> 01:01:53.961
Your granny lied

949
01:01:54.128 --> 01:01:55.838
I'd rather be shiny

950
01:01:56.005 --> 01:01:58.883
Like a treasure
From a sunken pirate wreck

951
01:01:59.050 --> 01:02:02.512
Scrub the deck
And make it look shiny

952
01:02:02.678 --> 01:02:05.515
I will sparkle like a
Wealthy woman's neck

953
01:02:06.015 --> 01:02:08.226
Just a sec
Don't ya know

954
01:02:08.393 --> 01:02:12.230
Fish are dumb, dumb, dumb
They chase anything that glitters

955
01:02:12.647 --> 01:02:13.856
Beginners

956
01:02:14.148 --> 01:02:16.484
Oh, and here they come, come, come

957
01:02:16.651 --> 01:02:18.694
To the brightest thing that glitters

958
01:02:18.861 --> 01:02:19.862
Mm, fish dinners

959
01:02:20.029 --> 01:02:22.407
I just love free food

960
01:02:22.990 --> 01:02:25.868
And you look like seafood

961
01:02:27.245 --> 01:02:29.080
MAUI: Hey, crab cake!

962
01:02:33.000 --> 01:02:34.377
I'm back.

963
01:02:35.670 --> 01:02:37.922
It's Maui Time!

964
01:02:38.214 --> 01:02:39.215
(GASPS)

965
01:02:40.675 --> 01:02:41.843
What do you say, little buddy?

966
01:02:42.844 --> 01:02:44.554
Giant hawk? Coming up!

967
01:02:44.720 --> 01:02:46.097
Cheeeehoooo!

968
01:02:49.016 --> 01:02:52.103
Cheeeehoooo!

969
01:02:56.566 --> 01:02:58.401
Well, well, well.

970
01:02:58.568 --> 01:03:00.862
Little Maui's having
trouble with his look

971
01:03:01.737 --> 01:03:03.823
Ya little semi-demi-mini-god

972
01:03:04.365 --> 01:03:06.617
Ouch What a terrible performance

973
01:03:06.784 --> 01:03:08.202
Get the hook
Get it?

974
01:03:08.369 --> 01:03:11.080
You don't swing it
Like you used to, man

975
01:03:11.747 --> 01:03:14.709
Yet I have to give you
Credit for my start

976
01:03:14.876 --> 01:03:17.837
And your tattoos on the outside

977
01:03:18.212 --> 01:03:21.340
For just like you
I made myself a work of art

978
01:03:21.591 --> 01:03:23.551
I 'll never hide
I can't

979
01:03:23.718 --> 01:03:24.760
I'm too shiny

980
01:03:24.927 --> 01:03:27.889
Watch me dazzle
Like a diamond in the rough

981
01:03:28.055 --> 01:03:31.392
Strut my stuff
My stuff is so shiny

982
01:03:31.601 --> 01:03:34.061
Send your armies
But they'll never be enough

983
01:03:34.395 --> 01:03:36.898
My shell's too tough
Maui, man

984
01:03:38.065 --> 01:03:40.443
You can try, try, try
But you can't expect a demigod

985
01:03:41.277 --> 01:03:43.446
To beat a decapod
Look it up

986
01:03:43.779 --> 01:03:45.406
You Will die, die, die

987
01:03:45.740 --> 01:03:47.408
Now it's time for me to take apart

988
01:03:48.117 --> 01:03:49.911
Your achin' heart

989
01:03:50.244 --> 01:03:54.665
Far from the ones who abandoned you

990
01:03:55.374 --> 01:03:59.504
Chasing the love of these humans

991
01:03:59.587 --> 01:04:02.632
Who made you feel wanted

992
01:04:02.965 --> 01:04:05.426
You tried to be tough

993
01:04:05.593 --> 01:04:09.639
But your armor's just not hard enough

994
01:04:10.389 --> 01:04:13.601
Maui
Now it's time to kick your heinie

995
01:04:14.435 --> 01:04:17.396
Ever seen someone so shiny

996
01:04:17.772 --> 01:04:20.691
Soak it in
Cause it's the last you'll ever see

997
01:04:21.025 --> 01:04:22.443
C'est la vie
Mon ami

998
01:04:22.652 --> 01:04:24.111
I'm so shiny

999
01:04:24.445 --> 01:04:27.073
Now I eat you so
prepare your final plea

1000
01:04:27.281 --> 01:04:28.366
Just for me

1001
01:04:29.784 --> 01:04:32.119
You'll never be quite as shiny

1002
01:04:32.620 --> 01:04:36.457
You wish you were nice and shiny

NOTE CHAPTER
title: 26. Escape from Tamatoa
start: 01:04:38

1003
01:04:39.168 --> 01:04:40.336

- MOANA: Hey!
- Huh?

1004
01:04:41.045 --> 01:04:42.797
I got something shiny for ya!

1005
01:04:44.966 --> 01:04:47.301
The heart of Te Fiti.

1006
01:04:47.468 --> 01:04:49.804
You can't run from me!

1007
01:04:50.096 --> 01:04:51.973
Oh, you can. You keep surprising me.

1008
01:04:54.392 --> 01:04:56.686
There's only so far you can get on those two little legs.

1009
01:04:57.520 --> 01:04:58.521
(YELLS)

1010
01:04:59.981 --> 01:05:01.607
(LAUGHING)

1011
01:05:01.816 --> 01:05:03.442
The power of creation...

1012
01:05:03.776 --> 01:05:05.278
for a crustacean.

1013
01:05:05.403 --> 01:05:06.904
Where is it? Where is it?

1014
01:05:07.572 --> 01:05:09.156
We gotta go!

1015
01:05:09.824 --> 01:05:10.825
What about the heart?

1016
01:05:10.992 --> 01:05:13.494
He can have it. I've got a better one.

1017
01:05:14.829 --> 01:05:16.163
Yes, I have the...

1018
01:05:16.330 --> 01:05:17.331
Wait a minute.

1019
01:05:17.748 --> 01:05:20.334
I see, she's taken a barnacle
and she's covered it in...

1020
01:05:20.501 --> 01:05:23.671
bioluminescent algae as a diversion.

1021
01:05:26.007 --> 01:05:27.049
Come back here!

1022
01:05:31.512 --> 01:05:33.848
Cheeeehoooo!

1023
01:05:34.640 --> 01:05:35.975
Hey!

1024
01:05:36.058 --> 01:05:37.685
Did you like the song?

NOTE CHAPTER
title: 26. Hook training
start: 01:05:42

1025
01:05:43.774 --> 01:05:44.775
(THUDDING)

1026
01:05:45.192 --> 01:05:46.569
We're alive!

1027
01:05:46.736 --> 01:05:47.737
We're alive!

1028
01:05:49.697 --> 01:05:50.698
Listen...

1029
01:05:50.865 --> 01:05:52.783
I appreciate what you did down there.

1030
01:05:52.950 --> 01:05:54.118
Mm-hmm.

1031
01:05:54.201 --> 01:05:55.244

- Took guts.
- Mm-hmm.

1032
01:05:55.411 --> 01:05:56.579

- But...
- Mm-hmm.

1033
01:05:56.746 --> 01:05:57.747
I'm sorry.

1034
01:05:57.913 --> 01:06:00.958
I'm trying to be sincere for once,
and it feels like you're distracted.

1035
01:06:01.125 --> 01:06:03.044
No, no. No way!

1036
01:06:03.210 --> 01:06:05.463
Really? Because you're looking at me
like I have a...

1037
01:06:05.546 --> 01:06:06.547
(GASPS)

1038
01:06:08.424 --> 01:06:09.550
shark head.

1039
01:06:09.717 --> 01:06:12.887
What? Do you have a shark head?

1040
01:06:13.095 --> 01:06:14.764
Look, the point is...

1041
01:06:14.889 --> 01:06:17.808
for a little girl, child, thing,
whatever...

1042
01:06:17.975 --> 01:06:20.519
who had no business
being down there...

1043
01:06:20.895 --> 01:06:22.438
you did me a solid.

1044
01:06:22.563 --> 01:06:24.690
But you also almost died.

1045
01:06:25.316 --> 01:06:26.901
And I couldn't even beat that dumb crab.

1046
01:06:26.984 --> 01:06:29.236
So, chances of beating Te Kā?

1047
01:06:29.403 --> 01:06:30.571
Bupkis.

1048
01:06:30.738 --> 01:06:33.991
We're never making it to Te Fiti.
This mission is cursed.

1049
01:06:34.367 --> 01:06:35.409
It's not cursed.

1050
01:06:36.118 --> 01:06:37.119
Shark head.

1051
01:06:37.286 --> 01:06:39.997
It is not cursed.

1052
01:06:45.836 --> 01:06:46.837
(GROANS)

1053
01:06:54.178 --> 01:06:55.179
Cursed.

1054
01:06:59.266 --> 01:07:01.435
What can I say except

1055
01:07:01.602 --> 01:07:03.437
We're dead soon

1056
01:07:03.646 --> 01:07:05.106
We're dead soon

1057
01:07:06.148 --> 01:07:08.067
Can you at least try?

1058
01:07:10.611 --> 01:07:12.446
Giant hawk.

1059
01:07:15.282 --> 01:07:17.410
Hey, it's okay, it's okay
We're dead soon

1060
01:07:18.285 --> 01:07:20.204
All right, break time's over.

1061
01:07:20.371 --> 01:07:21.372
Get up.

1062
01:07:21.539 --> 01:07:23.874
Why? Are you gonna give me a speech?

1063
01:07:24.041 --> 01:07:27.795
Tell me I can beat Te Kā
cause I'm "Maui?"

1064
01:07:29.547 --> 01:07:30.631
Take a hike, Tiny.

1065
01:07:36.637 --> 01:07:39.140
How do you get your tattoos?

1066
01:07:39.473 --> 01:07:41.767
They show up. When I earn them.

1067
01:07:42.727 --> 01:07:45.563
How'd you earn that one?
What's that for?

1068
01:07:45.730 --> 01:07:49.024
That's man's discovery of Nunya.

1069
01:07:49.191 --> 01:07:50.317
What's Nunya?

1070
01:07:50.484 --> 01:07:51.819
Nunya business.

1071
01:07:53.320 --> 01:07:54.780
I'll just keep asking.

1072
01:07:57.032 --> 01:07:58.033
What's it for?

1073
01:07:58.743 --> 01:08:00.828
You need to stop doing that.

1074
01:08:05.416 --> 01:08:07.209

- Back off.
- Just tell me what it is.

1075
01:08:07.376 --> 01:08:08.836
I said back off.

1076
01:08:09.003 --> 01:08:10.671
Is it why your hook's not working?

1077
01:08:26.687 --> 01:08:29.440
You don't wanna talk, don't talk.

1078
01:08:29.857 --> 01:08:31.859
You wanna throw me off the boat...

1079
01:08:32.234 --> 01:08:33.944
throw me off.

1080
01:08:34.111 --> 01:08:37.448
You wanna tell me
I don't know what I'm doing...

1081
01:08:37.948 --> 01:08:39.575
I know I don't.

1082
01:08:40.534 --> 01:08:43.704
I have no idea why the ocean chose me.

1083
01:08:43.871 --> 01:08:45.581
You're right.

1084
01:08:46.207 --> 01:08:50.211
But my island is dying...

1085
01:08:51.045 --> 01:08:54.048
so I am here.

1086
01:08:54.715 --> 01:08:57.092
It's just me and you.

1087
01:08:57.259 --> 01:08:59.929
And I want to help...

1088
01:09:00.095 --> 01:09:04.391
but I can't if you don't let me.

1089
01:09:08.687 --> 01:09:09.688
(SIGHS)

1090
01:09:09.772 --> 01:09:12.316
MAUI: I wasn't born a demigod.

1091
01:09:12.983 --> 01:09:15.110
I had human parents.

1092
01:09:17.488 --> 01:09:21.450
They took one look and decided...

1093
01:09:21.617 --> 01:09:24.078
they did not want me.

1094
01:09:24.411 --> 01:09:26.539
They threw me into the sea...

1095
01:09:26.997 --> 01:09:30.125
like I was nothing.

1096
01:09:31.669 --> 01:09:35.130
Somehow, I was found by the gods.

1097
01:09:35.297 --> 01:09:36.924
They gave me the hook.

1098
01:09:37.591 --> 01:09:38.759
They made me...

1099
01:09:39.593 --> 01:09:40.594
Maui.

1100
01:09:41.971 --> 01:09:44.640
And back to the humans I went.

1101
01:09:45.099 --> 01:09:48.978
I gave them islands, fire, coconuts.

1102
01:09:49.979 --> 01:09:52.273
Anything they could ever want.

1103
01:09:52.982 --> 01:09:55.276
You took the heart for them.

1104
01:09:55.985 --> 01:09:58.863
You did everything for them.

1105
01:09:59.697 --> 01:10:01.532
So they'd love you.

1106
01:10:02.116 --> 01:10:05.286
It was never enough.

1107
01:10:13.377 --> 01:10:16.714
Maybe the gods found you for a reason.

1108
01:10:16.881 --> 01:10:20.050
Maybe the ocean brought you to them...

1109
01:10:20.217 --> 01:10:24.305
because it saw someone
who was worthy of being saved.

1110
01:10:25.556 --> 01:10:29.143
But the gods aren't the ones who make you Maui.

1111
01:10:29.852 --> 01:10:31.061
You are.

1112
01:10:40.529 --> 01:10:42.364
Okay, okay.

1113
01:10:43.324 --> 01:10:45.826
I love you, too, buddy.

1114
01:11:35.668 --> 01:11:36.877
Cheeeehoooo!

1115
01:11:51.809 --> 01:11:52.810
Yeah!

1116
01:12:17.001 --> 01:12:19.628
Next stop, Te Fiti.

NOTE CHAPTER
title: 28. Meeting with Te Ka
start: 01:13:05

1117
01:13:06.467 --> 01:13:07.468
What?

1118
01:13:07.634 --> 01:13:09.136
I figured it out.

1119
01:13:10.471 --> 01:13:14.183
You know, the ocean used to love
when I pulled up islands...

1120
01:13:14.349 --> 01:13:18.145
cause your ancestors
would sail her seas and find 'em.

1121
01:13:18.812 --> 01:13:21.774
All those new lands, new villages.

1122
01:13:22.149 --> 01:13:24.610
It was the water that connected 'em all.

1123
01:13:24.985 --> 01:13:26.653
And if I were the ocean...

1124
01:13:26.820 --> 01:13:30.908
I think I'd be looking for
a curly-haired non-princess...

1125
01:13:31.658 --> 01:13:33.494
to start that again.

1126
01:13:33.660 --> 01:13:38.040
That is literally the nicest thing
you've ever said to me.

1127
01:13:39.083 --> 01:13:41.210
Probably should have saved it
for Te Fiti.

1128
01:13:42.836 --> 01:13:43.921
I did.

1129
01:13:46.757 --> 01:13:48.926
Moana of Motunui...

1130
01:13:49.259 --> 01:13:54.723
I believe you have officially
delivered Maui across the great sea.

1131
01:13:55.849 --> 01:13:58.352
Moana! Moana! Moana!

1132
01:13:58.811 --> 01:14:00.604
You're so amazing!

1133
01:14:02.397 --> 01:14:03.398
It's time.

1134
01:14:21.708 --> 01:14:23.252
Go save the world.

1135
01:14:24.753 --> 01:14:26.380
Cheeeehoooo!

1136
01:14:42.563 --> 01:14:43.564
(GASPS)

1137
01:14:43.814 --> 01:14:44.815
(ROARING)

1138
01:14:45.649 --> 01:14:46.650
(GROANS)

1139
01:14:46.984 --> 01:14:48.694
Maui!

1140
01:15:22.644 --> 01:15:23.896
What are you doing?

1141
01:15:24.146 --> 01:15:25.814
Finding you a better way in!

1142
01:15:27.482 --> 01:15:29.193

- We won't make it!
- Yes, we will!

1143
01:15:29.359 --> 01:15:30.485

- Turn around!
- No!

1144
01:15:30.652 --> 01:15:31.778
Moana, stop!

1145
01:15:31.945 --> 01:15:32.946
No!

NOTE CHAPTER
title: 29. Cracked hook
start: 01:15:35

1146
01:15:36.533 --> 01:15:37.534
(BOTH SCREAMING)

1147
01:16:00.891 --> 01:16:02.643
Are you okay?

1148
01:16:04.186 --> 01:16:05.187
Maui?

1149
01:16:13.028 --> 01:16:14.947
I told you to turn back.

1150
01:16:17.241 --> 01:16:18.992
I thought we could make it.

1151
01:16:19.326 --> 01:16:20.410
We?

1152
01:16:21.870 --> 01:16:23.956
I thought I could make it.

1153
01:16:25.832 --> 01:16:27.042
We can fix it.

1154
01:16:27.209 --> 01:16:29.336
It was made by the gods.

1155
01:16:29.503 --> 01:16:31.255
You can't fix it!

1156
01:16:31.546 --> 01:16:33.757
Next time we'll be more careful.

1157
01:16:34.049 --> 01:16:36.093
Te Kā was stuck on the barrier islands.

1158
01:16:36.260 --> 01:16:38.679
It's lava, it can't go in the water.

1159
01:16:38.845 --> 01:16:40.847
We can find a way around.

1160
01:16:41.014 --> 01:16:42.849
I'm not going back.

1161
01:16:44.017 --> 01:16:45.560
We still have to restore the heart.

1162
01:16:45.852 --> 01:16:47.229
My hook is cracked.

1163
01:16:47.396 --> 01:16:49.064
One more hit, and it's over.

1164
01:16:49.439 --> 01:16:51.316
Maui, you have to restore the heart.

1165
01:16:51.650 --> 01:16:53.360
Without my hook, I am nothing.

1166
01:16:53.527 --> 01:16:54.695
That's not true!

1167
01:16:54.861 --> 01:16:57.364
Without my hook, I am nothing!

1168
01:16:57.572 --> 01:16:58.573
(SHUDDERING)

1169
01:17:06.915 --> 01:17:08.166
We are only here...

1170
01:17:08.542 --> 01:17:11.461
because you stole the heart in the first place.

1171
01:17:12.754 --> 01:17:15.382
No, we're here because
the ocean told you you're special...

1172
01:17:15.549 --> 01:17:17.342
and you believed it.

1173
01:17:18.593 --> 01:17:21.096
I am Moana of Motunui.

1174
01:17:21.263 --> 01:17:23.473

- You will board my boat...
- Goodbye, Moana.

1175
01:17:23.640 --> 01:17:24.808
...sail across the sea...

1176
01:17:24.975 --> 01:17:26.059
I'm not killing myself...

1177
01:17:26.226 --> 01:17:27.477
so you can prove you're something you're not!

1178
01:17:27.644 --> 01:17:28.895
...and restore the heart of Te Fiti!

1179
01:17:29.604 --> 01:17:31.982
The ocean chose me!

1180
01:17:32.941 --> 01:17:34.651
It chose wrong.

1181
01:17:44.369 --> 01:17:45.454
Maui!

NOTE CHAPTER
title: 30. Meeting with the ghost of grandmother
start: 01:17:59

1182
01:18:00.427 --> 01:18:02.929
Why did you bring me here?

1183
01:18:07.768 --> 01:18:09.770
I'm not the right person.

1184
01:18:12.606 --> 01:18:15.442
You have to choose someone else.

1185
01:18:17.778 --> 01:18:20.322
Choose someone else.

1186
01:18:21.114 --> 01:18:22.449
Please.

1187
01:18:39.466 --> 01:18:40.467
(SOBBING)

1188
01:18:41.551 --> 01:18:42.803
No.

1189
01:18:58.693 --> 01:19:00.987
GRAMMA: You're a long ways
past the reef.

1190
01:19:02.364 --> 01:19:03.365
Gramma?

1191
01:19:05.367 --> 01:19:08.370
Guess I chose the right tattoo.

1192
01:19:08.829 --> 01:19:09.830
Gramma!

1193
01:19:15.460 --> 01:19:17.546
I tried, Gramma.

1194
01:19:19.464 --> 01:19:21.174
I couldn't do it.

1195
01:19:21.925 --> 01:19:24.428
It's not your fault.

1196
01:19:24.594 --> 01:19:28.348
I never should have put so much
on your shoulders.

1197
01:19:29.182 --> 01:19:31.184
If you are ready to go home...

1198
01:19:32.686 --> 01:19:34.688
I will be with you.

1199
01:19:51.246 --> 01:19:52.873
Why do you hesitate?

1200
01:19:54.291 --> 01:19:55.959
I don't know.

NOTE CHAPTER
title: 31. Granny's Last Song
start: 01:19:58

1201
01:19:59.546 --> 01:20:01.882
I know a girl from an island

1202
01:20:02.924 --> 01:20:05.594
She stands apart from the crowd

1203
01:20:06.052 --> 01:20:09.055
She loves the sea and her people

1204
01:20:09.556 --> 01:20:11.725
She makes her whole family proud

1205
01:20:12.893 --> 01:20:15.604
Sometimes the world
seems against you

1206
01:20:16.313 --> 01:20:19.107
The journey may leave a scar

1207
01:20:19.274 --> 01:20:22.068
But scars can heal and reveal just

1208
01:20:22.235 --> 01:20:24.821
Where you are

1209
01:20:25.780 --> 01:20:28.742
The people you love will change you

1210
01:20:29.117 --> 01:20:31.995
The things you have
learned will guide you

1211
01:20:32.245 --> 01:20:35.582
And nothing on earth can silence

1212
01:20:35.749 --> 01:20:38.752
The quiet voice still inside you

1213
01:20:39.252 --> 01:20:42.422
And when that voice starts to whisper

1214
01:20:42.589 --> 01:20:45.258
Moana, you've come so far

1215
01:20:46.009 --> 01:20:47.761
Moana, listen

1216
01:20:47.928 --> 01:20:52.599
Do you know who you are?

1217
01:20:54.851 --> 01:20:56.269
Who am I?

1218
01:20:58.313 --> 01:21:01.775
I am a girl who loves my island

1219
01:21:02.150 --> 01:21:05.737
And the girl who loves the sea

1220
01:21:06.112 --> 01:21:09.199
It calls me

1221
01:21:11.284 --> 01:21:14.162
I am the daughter of the village chief

1222
01:21:14.704 --> 01:21:17.582
We are descended from voyagers

1223
01:21:17.999 --> 01:21:20.335
Who found their way across the world

1224
01:21:20.794 --> 01:21:22.754
They call me

1225
01:21:24.464 --> 01:21:26.967
I've delivered us to where we are

1226
01:21:27.634 --> 01:21:30.303
I have journeyed farther

1227
01:21:30.804 --> 01:21:33.181
I am everything I've learned and more

1228
01:21:33.557 --> 01:21:35.350
Still it calls me

1229
01:21:37.519 --> 01:21:39.813
And the call isn't out there at all

1230
01:21:39.980 --> 01:21:42.774
It's inside me

1231
01:21:43.191 --> 01:21:45.151
It's like the tide

1232
01:21:45.318 --> 01:21:49.573
Always falling and rising

1233
01:21:50.031 --> 01:21:52.492
I will carry you here in my heart

1234
01:21:52.659 --> 01:21:55.704
You remind me

1235
01:21:55.870 --> 01:21:58.832
That come what may

1236
01:21:58.999 --> 01:22:02.002
I know the way

1237
01:22:02.168 --> 01:22:06.756
I am Moana

NOTE CHAPTER
title: 32. Moana swims alone to Te Ka
start: 01:22:35

1238
01:22:36.870 --> 01:22:37.871
(GRUNTS)

1239
01:22:41.207 --> 01:22:43.418
I am Moana of Motunui.

1240
01:22:44.878 --> 01:22:45.879
Aboard my boat...

1241
01:22:46.212 --> 01:22:48.381
I will sail across the sea...

1242
01:22:48.757 --> 01:22:51.718
and restore the heart of Te Fiti.

1243
01:23:27.921 --> 01:23:29.923
Te Kā can't follow us into the water.

1244
01:23:30.757 --> 01:23:32.258
We make it past the barrier islands...

1245
01:23:33.093 --> 01:23:34.260
we make it to Te Fiti.

1246
01:23:34.844 --> 01:23:36.096
None of which you understand...

1247
01:23:36.846 --> 01:23:38.264

- because you are a chicken.
- (CLUCKING)

1248
01:23:45.230 --> 01:23:46.231
(ROARING)

1249
01:24:35.363 --> 01:24:37.157
(GRUNTING)

1250
01:24:40.910 --> 01:24:41.911
(YELPS)

1251
01:24:44.873 --> 01:24:45.874
No!

1252
01:24:47.167 --> 01:24:49.586
Heihei! No, no, no!

1253
01:24:51.171 --> 01:24:52.338
Nice work!

1254
01:25:01.723 --> 01:25:02.849
Te Fiti.

NOTE CHAPTER
title: 33. Second meeting with Te Ka
start: 01:25:13

1255
01:25:14.944 --> 01:25:15.945
(COUGHING)

1256
01:25:20.200 --> 01:25:21.201
(GRUNTING)

1257
01:25:25.079 --> 01:25:26.080
(EAGLE SCREECHING)

1258
01:25:28.208 --> 01:25:29.209
Maui!

1259
01:25:33.880 --> 01:25:34.923
You came back.

1260
01:25:35.298 --> 01:25:36.299
(CHUCKLES)

1261
01:25:38.760 --> 01:25:40.053
But your hook.

1262
01:25:40.220 --> 01:25:41.721
One more hit and...

1263
01:25:42.597 --> 01:25:44.057
Te Kā's gotta catch me first.

1264
01:25:44.516 --> 01:25:45.517
(TE KĀ ROARING)

1265
01:25:47.227 --> 01:25:48.269
I got your back, Chosen One.

1266
01:25:49.729 --> 01:25:50.730
Go save the world.

1267
01:25:50.814 --> 01:25:51.815
Maui.

1268
01:25:52.690 --> 01:25:53.733
Thank you.

1269
01:25:54.692 --> 01:25:55.985
You're welcome.

1270
01:25:56.694 --> 01:25:58.279
Cheeeehoooo!

1271
01:26:02.992 --> 01:26:03.993
(SCREAMING)

1272
01:26:17.048 --> 01:26:18.174
Hot-hot-hot, hot-hot-hot!

1273
01:26:29.644 --> 01:26:31.104
Hey, Te Kā!

1274
01:26:31.855 --> 01:26:32.856
Shark head!

1275
01:26:34.440 --> 01:26:35.525
Cheeeehoooo!

1276
01:26:38.945 --> 01:26:39.946
(GROANS)

1277
01:26:45.952 --> 01:26:46.953
Moana!

1278
01:26:57.297 --> 01:26:59.173
Get the heart to the spiral!

1279
01:27:37.003 --> 01:27:39.130
Te Fiti...

1280
01:27:39.297 --> 01:27:40.715
it's gone.

1281
01:27:53.353 --> 01:27:55.021
MAUI: Te Kā!

1282
01:27:56.814 --> 01:27:58.775
(SHOUTING IN FOREIGN LANGUAGE)

1283
01:28:30.974 --> 01:28:32.100
Let her come to me.

NOTE CHAPTER
title: 34. Moana's Song of Te Fiti
start: 01:28:45

1284
01:28:46.364 --> 01:28:48.074
(ROARING)

1285
01:28:55.581 --> 01:28:59.085
I have crossed the horizon to find you

1286
01:29:06.342 --> 01:29:08.720
I know your name

1287
01:29:12.515 --> 01:29:16.352
They have stolen the
heart from inside you

1288
01:29:21.107 --> 01:29:24.193
But this does not define you

1289
01:29:27.780 --> 01:29:31.784
This is not who you are

1290
01:29:33.453 --> 01:29:38.708
You know who you are

1291
01:29:45.548 --> 01:29:48.217
Who you truly are.

NOTE CHAPTER
title: 35. The Return of Te Fiti's Heart
start: 01:30:10

1292
01:30:11.324 --> 01:30:12.408
Te Fiti!

1293
01:30:50.279 --> 01:30:51.280
(HEIHEI SCREECHING)

1294
01:30:52.990 --> 01:30:54.367
The chicken lives.

1295
01:30:56.202 --> 01:30:58.204
I'm sorry about your hook.

1296
01:30:58.704 --> 01:31:01.707
Well, hook, no hook...

1297
01:31:02.208 --> 01:31:03.793
I'm Maui.

1298
01:31:22.186 --> 01:31:24.480
(GASPS) Te Fiti!

1299
01:31:24.564 --> 01:31:25.565
(LAUGHING SHEEPISHLY)

1300
01:31:25.648 --> 01:31:27.483
Hey, I mean, how you been?

1301
01:31:29.735 --> 01:31:30.736
(CLEARS THROAT)

1302
01:31:30.820 --> 01:31:33.239
Look, what I did was...

1303
01:31:33.406 --> 01:31:34.824
wrong.

1304
01:31:34.991 --> 01:31:37.034
I have no excuse.

1305
01:31:37.660 --> 01:31:38.744
I'm sorry.

1306
01:31:44.500 --> 01:31:45.543
(GASPS)

1307
01:31:47.753 --> 01:31:51.257
You know, it'd be rude to refuse
a gift from a goddess.

1308
01:31:52.383 --> 01:31:54.260
Cheeeehoooo!

1309
01:31:56.095 --> 01:31:57.096
Thank you.

1310
01:31:57.221 --> 01:31:59.765
Your kind gesture is
deeply appreciated.

1311
01:31:59.932 --> 01:32:00.933
Cheeeehoooo.

NOTE CHAPTER
title: 36. The Way Home
start: 01:32:48

1312
01:32:49.649 --> 01:32:51.067
Gonna miss you, drumstick.

1313
01:32:51.234 --> 01:32:52.318
You could come with us, you know.

1314
01:32:53.236 --> 01:32:56.822
My people are going to need
a master wayfinder.

1315
01:32:58.324 --> 01:33:00.159
They already have one.

1316
01:33:18.636 --> 01:33:19.762
See you out there, Maui.

1317
01:33:20.680 --> 01:33:22.974
See you out there, Moana.

1318
01:33:23.641 --> 01:33:24.850
Cheeeehoooo!

NOTE CHAPTER
title: 37. Back at home
start: 01:34:15

1319
01:34:16.193 --> 01:34:17.862
Mom! Dad!

1320
01:34:18.029 --> 01:34:19.196
Moana!

1321
01:34:27.204 --> 01:34:31.751
I may have gone
a little ways past the reef.

1322
01:34:33.085 --> 01:34:34.712
It suits you.

1323
01:34:34.879 --> 01:34:35.921
MALE VILLAGER: She's back!

1324
01:34:36.088 --> 01:34:37.089

- FEMALE VILLAGER: Moana!
- (PUA SQUEALING)

1325
01:34:37.256 --> 01:34:38.257
MOANA: Pua!

1326
01:34:40.259 --> 01:34:41.260
Moana!

1327
01:34:43.512 --> 01:34:44.847
Welcome home!

NOTE CHAPTER
title: 38. Song of the Mariners
start: 01:34:56

1328
01:34:57.401 --> 01:34:58.903
(VILLAGERS CHEERING)

1329
01:35:34.772 --> 01:35:36.941
We set a course to find

1330
01:35:37.108 --> 01:35:41.362
A brand new island
everywhere we roam

1331
01:35:43.656 --> 01:35:46.033
We keep our island in our mind

1332
01:35:46.575 --> 01:35:50.788
And when it's time to find home
We know the way

1333
01:35:52.498 --> 01:35:55.501
We are explorers reading every sign

1334
01:35:56.127 --> 01:36:00.339
We tell the stories of our elders
In a never-ending chain

1335
01:36:07.930 --> 01:36:12.601
We know the way

NOTE CHAPTER
title: 39. The Last Words of Tamatoa
start: 01:36:19

1336
01:36:20.776 --> 01:36:22.820
(MUSIC PLAYING)

1337
01:46:07.529 --> 01:46:08.905
Shiny

1338
01:46:09.448 --> 01:46:11.950
I'm so shiny

1339
01:46:12.576 --> 01:46:14.369
Didn't help me though, did it?

1340
01:46:14.536 --> 01:46:16.496
Still upside down here.

1341
01:46:16.663 --> 01:46:18.915
Just need a little push.

1342
01:46:19.458 --> 01:46:20.459
(GROANS)

1343
01:46:21.084 --> 01:46:22.085
Can we be real?

1344
01:46:22.252 --> 01:46:25.630
If my name was Sebastian
and I had a cool Jamaican accent...

1345
01:46:25.797 --> 01:46:27.007
you'd totally help me.

1346
01:46:27.174 --> 01:46:28.800
You would. You know you would.
`

const result = parseChapters(vttExample)

const expectedOutput = [
	{
		title: '1. Prehistory from Gramma',
		description: 'Gramma tells a legend about how the World was created.',
		start: 51
	},
	{
		title: "2. Moana finds Te Fiti's heart",
		start: 294
	},
	{
		title: '3. Song of the village of Motunui',
		start: 476
	},
	{
		title: '4. Father shows the mountain of leaders',
		start: 613
	},
	{
		title: '5. Song about Home (Island)',
		start: 672
	},
	{
		title: '6. Moana solves village problems',
		start: 720
	},
	{ title: '7. Story about the father', start: 905 },
	{ title: '8. Song: "Who am I"', start: 977 },
	{
		title: '9. Moana swam over the reef',
		start: 1121
	},
	{
		title: '10. Grandma shows the cave of ships',
		start: 1167
	},
	{ title: '11. Song of the sailors', start: 1411 },
	{
		title: '12. Grandma tells how to remove the curse',
		start: 1560
	},
	{ title: '13. Village Council', start: 1674 },
	{
		title: "14. Grandmother's last testament",
		start: 1748
	},
	{
		title: '15. The song "The Ocean is Calling"',
		start: 1846
	},
	{
		title: '16. Moana is looking for Maui',
		start: 1932
	},
	{
		title: '17. First meeting with Maui',
		start: 2109
	},
	{ title: '18. Song of Maui', start: 2310 },
	{ title: '19. Maui steals a boat', start: 2460 },
	{
		title: '20. Meeting with the Kakamors',
		start: 2695
	},
	{
		title: '21. Moana and Maui agreed',
		start: 2947
	},
	{ title: "22. Moana's Nightmare", start: 3198 },
	{ title: '23. Tamatoa Island', start: 3248 },
	{
		title: '24. Lalatai Monster World',
		start: 3441
	},
	{ title: '25. Song of Tamatoa', start: 3688 },
	{ title: '26. Escape from Tamatoa', start: 3878 },
	{ title: '26. Hook training', start: 3942 },
	{ title: '28. Meeting with Te Ka', start: 4385 },
	{ title: '29. Cracked hook', start: 4535 },
	{
		title: '30. Meeting with the ghost of grandmother',
		start: 4679
	},
	{ title: "31. Granny's Last Song", start: 4798 },
	{
		title: '32. Moana swims alone to Te Ka',
		start: 4955
	},
	{
		title: '33. Second meeting with Te Ka',
		start: 5113
	},
	{
		title: "34. Moana's Song of Te Fiti",
		start: 5325
	},
	{
		title: "35. The Return of Te Fiti's Heart",
		start: 5410
	},
	{ title: '36. The Way Home', start: 5568 },
	{ title: '37. Back at home', start: 5655 },
	{ title: '38. Song of the Mariners', start: 5696 },
	{
		title: '39. The Last Words of Tamatoa',
		start: 5779
	}
]

test('vttParseChapters', () => {
	expect(result).toEqual(expectedOutput)
})
