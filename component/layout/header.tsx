'use client';

import React, { Suspense } from 'react';
import { Menu as MenuIcon, X, ChevronDown, Globe, DollarSign, Search, User, CalendarDays, Users, LifeBuoy, LogOut, Heart } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { 
  AppShell, 
  Group, 
  Button, 
  Avatar, 
  Text, 
  Anchor, 
  Collapse, 
  Stack, 
  Divider,
  Box,
  Container,
  Loader,
  Popover,
  TextInput,
  ActionIcon
} from '@mantine/core';
import { Menu } from '@mantine/core';
import { supabase } from '@/lib/supabase/client';
import { useAuth } from '@/app/providers';
 

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const auth = useAuth();
  const [logoutLoading, setLogoutLoading] = React.useState(false);
  const [navLoginLoading, setNavLoginLoading] = React.useState(false);
  const [navRegisterLoading, setNavRegisterLoading] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = React.useMemo(() => ([
    { label: 'Home', href: '/' },
    { label: 'Search Product', href: '/searchproduct' },
    { label: 'By Category', href: '/homepage', hasDropdown: true },
    { label: 'Methodology', href: '/methodology' },
    { label: 'News', href: '/news' },
    { label: 'Special Offers', href: '/special-offers' }
  ]), []);

  const computeInitials = (name: string) => {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return 'NA';
    const first = parts[0]?.[0] || '';
    const last = parts.length > 1 ? parts[parts.length - 1]?.[0] || '' : '';
    const letters = (first + last).toUpperCase();
    return letters || 'NA';
  };

  const userName = React.useMemo(() => {
    const full = (auth?.fullName || '').trim();
    const email = (auth?.email || '').trim();
    return full || (email ? email.split('@')[0] : '');
  }, [auth?.fullName, auth?.email]);
  const userInitials = auth ? computeInitials(userName) : null;
  const avatarUrl = auth?.avatarUrl || '';
  const [avatarSrc, setAvatarSrc] = React.useState<string>('');
  React.useEffect(() => {
    const url = String(avatarUrl || '');
    setAvatarSrc(url || '');
    const idx = url.indexOf('/storage/v1/object/public/avatars/');
    if (idx >= 0) {
      const path = url.slice(idx + '/storage/v1/object/public/avatars/'.length);
      if (path) {
        (async () => {
          try {
            const res = await (supabase as any).storage.from('avatars').createSignedUrl(path, 3600);
            const signed = res?.data?.signedUrl || '';
            if (signed) setAvatarSrc(signed);
          } catch {}
        })();
      }
    }
  }, [avatarUrl]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const currentRedirect = React.useMemo(() => {
    try {
      const path = pathname || '/';
      const qs = searchParams?.toString() || '';
      return qs ? `${path}?${qs}` : path;
    } catch { return pathname || '/'; }
  }, [pathname, searchParams]);
  React.useEffect(() => {
    try {
      const x = currentRedirect || '/';
      if (typeof window !== 'undefined') {
        localStorage.setItem('last_path', x);
      }
    } catch {}
  }, [currentRedirect]);
 
  return (
    <Suspense fallback={<Box component="header" style={{ height: 64 }} />}>
      <Box 
        component="header" 
        style={{ 
          backgroundColor: 'white', 
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', 
          position: 'sticky', 
          top: 0, 
          zIndex: 50 
        }}
      >
        <Container size="xl" px="xs">
          <Group justify="space-between" h={64} style={{ flexWrap: 'nowrap' }}>
          {/* Logo */}
          <Group style={{ flexShrink: 0 }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Group gap="sm" align="center">
                <img
                  src="/asset/logo/besttripguide.png"
                  alt="Best Trip Guide"
                  style={{ height: 50}}
                />
              </Group>
            </Link>
          </Group>

          {/* Desktop Navigation */}
          <Group gap="md" justify="center" visibleFrom="lg" style={{ flex: 1, minWidth: 0 }}>
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <Menu key={item.href} withinPortal={false}>
                    <Menu.Target>
                      <Button
                        variant="subtle"
                        color="gray"
                        size="sm"
                        rightSection={<ChevronDown size={16} />}
                        styles={{}}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#284361'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = isActive(item.href) ? '#284361' : '#6c757d'; }}
                        style={{
                          textDecoration: 'none',
                          color: isActive(item.href) ? '#284361' : '#6c757d',
                          fontWeight: isActive(item.href) ? 600 : 500,
                          transition: 'color 0.2s',
                          background: 'transparent'
                        }}
                      >
                        {item.label}
                      </Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item onClick={() => router.push('/activity')}>Activity</Menu.Item>
                      <Menu.Item onClick={() => router.push('/tour')}>Tour</Menu.Item>
                      <Menu.Item onClick={() => router.push('/watersport')}>Watersport</Menu.Item>
                      <Menu.Item onClick={() => router.push('/rental')}>Rental</Menu.Item>
                      <Menu.Item onClick={() => router.push('/fastboat')}>Fastboat</Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    textDecoration: 'none',
                    color: isActive(item.href) ? '#284361' : '#6c757d',
                    fontWeight: isActive(item.href) ? 600 : 500,
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#284361';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive(item.href) ? '#284361' : '#6c757d';
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </Group>

          {/* Right Side Actions */}
          <Group gap={6} visibleFrom="md" style={{ flexShrink: 0, marginLeft: 'auto' }}>
            <Menu withinPortal={false}>
              <Menu.Target>
                <Button 
                  variant="subtle" 
                  color="gray" 
                  leftSection={<Globe size={16} />}
                  rightSection={<ChevronDown size={16} />}
                  size="sm"
                  style={{ paddingInline: 8 }}
                >
                  EN
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Language</Menu.Label>
                <Menu.Item onClick={() => {}}>EN</Menu.Item>
                <Menu.Item onClick={() => {}}>ID</Menu.Item>
                <Menu.Item onClick={() => {}}>FR</Menu.Item>
                <Menu.Item onClick={() => {}}>JP</Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Menu withinPortal={false}>
              <Menu.Target>
                <Button 
                  variant="subtle" 
                  color="gray" 
                  leftSection={<DollarSign size={16} />}
                  rightSection={<ChevronDown size={16} />}
                  size="sm"
                  style={{ paddingInline: 8 }}
                >
                  IDR
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Currency</Menu.Label>
                <Menu.Item onClick={() => {}}>IDR</Menu.Item>
                <Menu.Item onClick={() => {}}>USD</Menu.Item>
                <Menu.Item onClick={() => {}}>EUR</Menu.Item>
                <Menu.Item onClick={() => {}}>JPY</Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Popover withArrow={true} position="bottom-end">
              <Popover.Target>
                <Button 
                  variant="subtle" 
                  color="gray" 
                  size="sm" 
                  aria-label="Search"
                  style={{ paddingInline: 8 }}
                >
                  <Search size={16} />
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <Group gap="xs">
                  <TextInput placeholder="Search..." />
                  <Button size="xs">Search</Button>
                </Group>
              </Popover.Dropdown>
            </Popover>
            {!userInitials && (
              <>
                <Button
                  variant="subtle"
                  color="gray"
                  size="sm"
                  style={{ paddingInline: 10 }}
                  loading={navLoginLoading}
                  onClick={() => {
                    if (navLoginLoading) return;
                    setNavLoginLoading(true);
                    router.push(`/login?redirectTo=${encodeURIComponent(currentRedirect || '/')}`);
                  }}
                >
                  Login
                </Button>
                <Button
                  color="primary"
                  size="sm"
                  style={{ backgroundColor: '#284361', paddingInline: 12 }}
                  loading={navRegisterLoading}
                  onClick={() => {
                    if (navRegisterLoading) return;
                    setNavRegisterLoading(true);
                    router.push(`/register?redirectTo=${encodeURIComponent(currentRedirect || '/')}`);
                  }}
                >
                  Register
                </Button>
              </>
            )}
            {userInitials && (
              <Menu position="bottom-end" shadow="md">
                <Menu.Target>
                  <Avatar size={40} radius="xl" src={avatarSrc || undefined} style={{ cursor: 'pointer', border: '2px solid #284361' }} />
                </Menu.Target>
                <Menu.Dropdown style={{ borderRadius: 12, border: '1px solid #e6e7ea', fontFamily: 'Georgia, Times, "Times New Roman", serif' }}>
                  <Menu.Label style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif', fontWeight: 600, color: '#284361', marginBottom: 6 }}>{userName}</Menu.Label>
                  <Menu.Item leftSection={<User size={16} />} style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif' }} onClick={() => router.push('/profile')}>My Profile</Menu.Item>
                  <Menu.Item leftSection={<CalendarDays size={16} />} style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif' }} onClick={() => router.push('/profile/my-bookings')}>My Bookings</Menu.Item>
                  <Menu.Item leftSection={<Users size={16} />} style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif' }} onClick={() => router.push('/profile/saved-travelers')}>Saved Travelers</Menu.Item>
                  <Menu.Item leftSection={<Heart size={16} />} style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif' }} onClick={() => router.push('/profile/wishlist')}>Wishlist</Menu.Item>
                  <Menu.Item leftSection={<LifeBuoy size={16} />} style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif' }} onClick={() => router.push('/profile/support-center')}>Support Center</Menu.Item>
                  <Menu.Item
                    leftSection={<LogOut size={16} />}
                    rightSection={logoutLoading ? <Loader size="xs" color="#284361" /> : undefined}
                    disabled={logoutLoading}
                    style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif' }}
                    onClick={async () => {
                      if (logoutLoading) return;
                      setLogoutLoading(true);
                      try {
                        await supabase.auth.signOut();
                        router.push('/');
                      } catch {
                      } finally {
                        setLogoutLoading(false);
                      }
                    }}
                  >
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            )}
            
          </Group>
          <Group gap="md" hiddenFrom="md">
            <Menu withinPortal={false} position="bottom-start">
              <Menu.Target>
                <Button
                  variant="subtle"
                  color="gray"
                  aria-label="Toggle Mobile Menu"
                >
                  <MenuIcon size={20} />
                </Button>
              </Menu.Target>
              <Menu.Dropdown style={{ backgroundColor: 'white' }}>
                {navItems.map((item) => (
                  <Menu.Item key={item.href} onClick={() => router.push(item.href)}>
                    {item.label}
                  </Menu.Item>
                ))}
                <Menu.Divider />
                <Menu.Label>By Category</Menu.Label>
                <Menu.Item onClick={() => router.push('/homepage?category=Activity')}>Activity</Menu.Item>
                <Menu.Item onClick={() => router.push('/tour')}>Tour</Menu.Item>
                <Menu.Item onClick={() => router.push('/watersport')}>Watersport</Menu.Item>
                <Menu.Item onClick={() => router.push('/homepage?category=Rental')}>Rental</Menu.Item>
                <Menu.Item onClick={() => router.push('/homepage?category=Fastboat')}>Fastboat</Menu.Item>
                <Menu.Divider />
                <Menu.Label>Language</Menu.Label>
                <Menu.Item>EN</Menu.Item>
                <Menu.Item>ID</Menu.Item>
                <Menu.Item>FR</Menu.Item>
                <Menu.Label>Currency</Menu.Label>
                <Menu.Item>IDR</Menu.Item>
                <Menu.Item>USD</Menu.Item>
                <Menu.Item>EUR</Menu.Item>
                <Menu.Divider />
                <Menu.Label>Search</Menu.Label>
                <Box style={{ padding: 8 }}>
                  <Group gap="xs">
                    <TextInput placeholder="Search..." />
                    <Button size="xs">Search</Button>
                  </Group>
                </Box>
              </Menu.Dropdown>
            </Menu>
            {userInitials ? (
              <Menu position="bottom-end" shadow="md">
                <Menu.Target>
                  <Avatar size={40} radius="xl" src={avatarSrc || undefined} style={{ cursor: 'pointer', border: '2px solid #284361' }} />
                </Menu.Target>
                <Menu.Dropdown style={{ borderRadius: 12, border: '1px solid #e6e7ea', fontFamily: 'Georgia, Times, "Times New Roman", serif' }}>
                  <Menu.Label style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif', fontWeight: 600, color: '#284361', marginBottom: 6 }}>{userName}</Menu.Label>
                  <Menu.Item leftSection={<User size={16} />} style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif' }} onClick={() => router.push('/profile')}>My Profile</Menu.Item>
                  <Menu.Item leftSection={<CalendarDays size={16} />} style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif' }} onClick={() => router.push('/profile/my-bookings')}>My Bookings</Menu.Item>
                  <Menu.Item leftSection={<Users size={16} />} style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif' }} onClick={() => router.push('/profile/saved-travelers')}>Saved Travelers</Menu.Item>
                  <Menu.Item leftSection={<Heart size={16} />} style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif' }} onClick={() => router.push('/profile/wishlist')}>Wishlist</Menu.Item>
                  <Menu.Item leftSection={<LifeBuoy size={16} />} style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif' }} onClick={() => router.push('/profile/support-center')}>Support Center</Menu.Item>
                  <Menu.Item
                    leftSection={<LogOut size={16} />}
                    rightSection={logoutLoading ? <Loader size="xs" color="#284361" /> : undefined}
                    disabled={logoutLoading}
                    style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif' }}
                    onClick={async () => {
                      if (logoutLoading) return;
                      setLogoutLoading(true);
                      try {
                        await supabase.auth.signOut();
                        router.push('/');
                      } catch {
                      } finally {
                        setLogoutLoading(false);
                      }
                    }}
                  >
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            ) : null}
          </Group>

          </Group>
        </Container>
      </Box>
    </Suspense>
  );
}
