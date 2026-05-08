import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CallIcon,
  FloppyDiskIcon,
  ImageUploadIcon,
  Location01Icon,
  Mail01Icon,
  PencilEdit01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/page-header";
import { SideBarLayout } from "@/components/sidebar";
import pottedPlantsImage from "@/assets/potted-plants.png";
import userImage from "@/assets/user.png";

type UserProfile = {
  name: string;
  email: string;
  phone: string;
  location: string;
  householdRole: string;
  bio: string;
  dietaryPreferences: string;
  favoriteCuisine: string;
};

const initialProfile: UserProfile = {
  name: "Raquelle Mae",
  email: "raquelle@example.com",
  phone: "+46 70 123 45 67",
  location: "Stockholm, Sweden",
  householdRole: "Family recipe keeper",
  bio: "Collecting cozy meals, family favorites, and the little kitchen notes that make recipes feel personal.",
  dietaryPreferences: "Balanced, pescatarian-friendly, low spice",
  favoriteCuisine: "Filipino comfort food",
};

export default function UserProfilePage() {
  const [profile, setProfile] = useState(initialProfile);
  const [draftProfile, setDraftProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  function updateDraft(field: keyof UserProfile, value: string) {
    setDraftProfile((current) => ({ ...current, [field]: value }));
  }

  function handleCancel() {
    setDraftProfile(profile);
    setIsEditing(false);
  }

  function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setProfile(draftProfile);
    setIsEditing(false);
  }

  const displayedProfile = isEditing ? draftProfile : profile;

  return (
    <SideBarLayout
      activeItem="home"
      collapsible="offcanvas"
      defaultOpen
      footerClassName="mt-auto"
      footerImage={pottedPlantsImage}
      footerImageClassName="h-80 w-auto object-cover"
      showBrandName
    >
      <main className="h-screen overflow-auto bg-background p-6 text-foreground lg:p-8">
        <PageHeader
          breadcrumbs={[
            { label: "Dashboard", to: "/dashboard" },
            { label: "Profile" },
          ]}
          eyebrow="Account"
          title="User profile"
          actions={
            isEditing ? (
              <>
                <Button
                  className="rounded-md border-border-secondary-button bg-card"
                  onClick={handleCancel}
                  type="button"
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button
                  className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                  form="profile-form"
                  type="submit"
                >
                  <HugeiconsIcon
                    icon={FloppyDiskIcon}
                    className="mr-2 h-4 w-4"
                  />
                  Save profile
                </Button>
              </>
            ) : (
              <Button
                className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setIsEditing(true)}
                type="button"
              >
                <HugeiconsIcon
                  icon={PencilEdit01Icon}
                  className="mr-2 h-4 w-4"
                />
                Edit profile
              </Button>
            )
          }
        />

        <section className="grid gap-6 xl:grid-cols-[0.85fr_1.35fr]">
          <aside className="space-y-6">
            <div className="rounded-lg border-2 border-border bg-card p-6 shadow-[0_18px_45px_rgba(89,76,45,0.08)]">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-28 w-28">
                  <AvatarImage src={userImage} alt={profile.name} />
                  <AvatarFallback>RM</AvatarFallback>
                </Avatar>
                <h2 className="mt-4 text-2xl font-semibold">
                  {displayedProfile.name}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {displayedProfile.householdRole}
                </p>
                <Button
                  className="mt-5 rounded-md border-border-secondary-button bg-background"
                  disabled={!isEditing}
                  type="button"
                  variant="outline"
                >
                  <HugeiconsIcon
                    icon={ImageUploadIcon}
                    className="mr-2 h-4 w-4"
                  />
                  Change photo
                </Button>
              </div>
            </div>

            <div className="rounded-lg border-2 border-border bg-card p-5">
              <h2 className="mb-4 text-lg font-semibold">Profile snapshot</h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <HugeiconsIcon
                    icon={Mail01Icon}
                    className="mt-0.5 h-5 w-5 text-primary"
                  />
                  <span>{displayedProfile.email}</span>
                </div>
                <div className="flex items-start gap-3">
                  <HugeiconsIcon
                    icon={CallIcon}
                    className="mt-0.5 h-5 w-5 text-primary"
                  />
                  <span>{displayedProfile.phone}</span>
                </div>
                <div className="flex items-start gap-3">
                  <HugeiconsIcon
                    icon={Location01Icon}
                    className="mt-0.5 h-5 w-5 text-primary"
                  />
                  <span>{displayedProfile.location}</span>
                </div>
              </div>
            </div>
          </aside>

          <form
            className="space-y-6"
            id="profile-form"
            onSubmit={handleSave}
          >
            <div className="rounded-lg border-2 border-border bg-card p-5">
              <div className="mb-5 flex items-center gap-2">
                <HugeiconsIcon icon={UserIcon} className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Personal details</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium">Full name</span>
                  <Input
                    disabled={!isEditing}
                    onChange={(event) =>
                      updateDraft("name", event.target.value)
                    }
                    value={draftProfile.name}
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Email</span>
                  <Input
                    disabled={!isEditing}
                    onChange={(event) =>
                      updateDraft("email", event.target.value)
                    }
                    type="email"
                    value={draftProfile.email}
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Phone</span>
                  <Input
                    disabled={!isEditing}
                    onChange={(event) =>
                      updateDraft("phone", event.target.value)
                    }
                    value={draftProfile.phone}
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Location</span>
                  <Input
                    disabled={!isEditing}
                    onChange={(event) =>
                      updateDraft("location", event.target.value)
                    }
                    value={draftProfile.location}
                  />
                </label>
                <label className="space-y-2 md:col-span-2">
                  <span className="text-sm font-medium">Household role</span>
                  <Input
                    disabled={!isEditing}
                    onChange={(event) =>
                      updateDraft("householdRole", event.target.value)
                    }
                    value={draftProfile.householdRole}
                  />
                </label>
              </div>
              <label className="mt-4 block space-y-2">
                <span className="text-sm font-medium">Bio</span>
                <textarea
                  className="min-h-28 w-full rounded-md border border-input bg-background px-3 py-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={!isEditing}
                  onChange={(event) => updateDraft("bio", event.target.value)}
                  value={draftProfile.bio}
                />
              </label>
            </div>

            <div className="rounded-lg border-2 border-border bg-card p-5">
              <h2 className="mb-5 text-xl font-semibold">
                Cooking preferences
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium">
                    Dietary preferences
                  </span>
                  <Input
                    disabled={!isEditing}
                    onChange={(event) =>
                      updateDraft("dietaryPreferences", event.target.value)
                    }
                    value={draftProfile.dietaryPreferences}
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Favorite cuisine</span>
                  <Input
                    disabled={!isEditing}
                    onChange={(event) =>
                      updateDraft("favoriteCuisine", event.target.value)
                    }
                    value={draftProfile.favoriteCuisine}
                  />
                </label>
              </div>
            </div>
          </form>
        </section>
      </main>
    </SideBarLayout>
  );
}
